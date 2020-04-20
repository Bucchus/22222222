/* 历史价格图表 */
var hzqSocket = 'http://mapi.ktyqg.com';

/* 绘图器 */
var myChart, interval, trace, socket = io.connect(hzqSocket);

socket.on('connect_error', function (error) { console.log(error); });
socket.on('error', function (error) { console.log(error); });

var chartOption = {
    tooltip: {
        trigger: 'axis',
        triggerOn: 'click',
        hideDelay: 0,
        padding: 3,
        backgroundColor: '#fff',
        borderColor: '#F08337',
        borderWidth: 1,
        confine: true,
        transitionDuration: 0.2,
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return '时间：' + numeral(date.getHours()).format('00') + ":" +
                    numeral(date.getMinutes()).format('00') + '<br/>价格：' +
                    numeral(params.value[1]).format('0.00');
        },
        textStyle: {
            color: '#F08337',
            fontSize: 12
        },
        axisPointer: {
            type: 'line',
            label: { show: false },
            lineStyle: {
                color: '#4488bb',
                width: 2
            }
        },
        position: function (pos, params, dom, rect, size) {
            var obj = {top: 25},
                diff = size.viewSize[0] - pos[0], pad = 6;
            if (diff < size.contentSize[0] + 5) {
                obj.right = diff + pad;
            }
            else {
                obj.left = pos[0] + pad;
            }
            return obj;
        }
    },
    grid: {
        show: true,
        left: 50,
        right: 15,
        top: 25,
        bottom: 30,
        borderColor: 'transparent'
    },
    xAxis: {
        type: 'time',
        interval: 5 * 60 * 1000,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#e4e4e4',
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#000',
                fontSize: 10
            },
            formatter: function (val) {
                var date = new Date(val);
                return numeral(date.getHours()).format('00') + ":" + numeral(date.getMinutes()).format('00');
            }
        },
        axisLine: {
            lineStyle: {
                color: '#4488bb',
                width: 2
            }
        }
    },
    yAxis: {
        type: 'value',
        scale: true,
        boundaryGap: ['5%', '0%'],
        splitNumber: 5,
        minInterval: 0.01,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#e4e4e4',
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#000',
                fontSize: 10
            },
            formatter: function (val) {
                return numeral(val).format('0.0[0]');
            }
        },
        axisLine: {
            lineStyle: {
                color: '#4488bb',
                width: 2
            }
        }
    },
    series: [{
        name: '历史价格',
        type: 'line',
        symbol: 'none',
        symbolSize: 7,
        showSymbol: false,
        hoverAnimation: false,
        legendHoverLink: false,
        lineStyle: {
            normal: {
                color: '#F08337',
                width: 1
            }
        },
        itemStyle: {
            normal: {
                color: '#ff7f50'
            }
        },
        areaStyle: {
            normal: {
                color: '#fde0b2'
            }
        }
    }]
};

var KOption = {
    tooltip: {
        trigger: 'axis',
        triggerOn: 'click',
        hideDelay: 0,
        padding: 3,
        backgroundColor: '#fff',
        borderColor: '#F08337',
        borderWidth: 1,
        confine: true,
        transitionDuration: 0.2,
        textStyle: {
            color: '#F08337',
            fontSize: 12
        },
        axisPointer: {
            type: 'line',
            label: { show: false },
            lineStyle: {
                color: '#4488bb',
                width: 2
            }
        },
        position: function (pos, params, dom, rect, size) {
            var obj = {top: 25},
                diff = size.viewSize[0] - pos[0], pad = 6;
            if (diff < size.contentSize[0] + 5) {
                obj.right = diff + pad;
            }
            else {
                obj.left = pos[0] + pad;
            }
            return obj;
        }
    },
    grid: {
        show: true,
        left: 50,
        right: 15,
        top: 25,
        bottom: 30,
        borderColor: 'transparent'
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        axisLabel: {
            textStyle: {
                color: '#000',
                fontSize: 10
            }
        },
        axisLine: {
            onZero: false,
            lineStyle: {
                color: '#4488bb',
                width: 2
            }
        },
        splitLine: { show: false }
    },
    yAxis: {
        type: 'value',
        scale: true,
        boundaryGap: ['5%', '0%'],
        splitNumber: 5,
        minInterval: 0.01,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#e4e4e4',
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#000',
                fontSize: 10
            },
            formatter: function (val) {
                return numeral(val).format('0.0[0]');
            }
        },
        axisLine: {
            lineStyle: {
                color: '#4488bb',
                width: 2
            }
        }
    },
    series: [{
        name: '历史价格',
        type: 'candlestick',
        symbol: 'none',
        symbolSize: 7,
        showSymbol: false,
        hoverAnimation: false,
        legendHoverLink: false,
        itemStyle: {
            normal: {
                color: '#fff',
                color0: '#00aa11',
                borderColor: '#ff3200',
                borderColor0: '#41bf4d'
            }
        }
    }]
};

var charHandler = function (trace) {

    if (!window.wid) { return; }

    var traceList = { sec: 20, min5: 300, min15: 900, hour: 3600, day: 86400 };
    var traceNumList = { sec: 90, min5: 36, min15: 34, hour: 29, day: 29 };

    if (!traceList[trace]) { return; }

    if (window.interval) {
        clearInterval(window.interval);
    }

    if (window.trace) {
        socket.off('goods-trace-' + window.trace + '-' + wid);
    }

    window.trace = trace;

    var traceNum = 0 - traceNumList[trace];

    myChart = echarts.init(document.getElementById('charts'));//折线图

    //侦听
    socket.on('goods-trace-' + trace + '-' + wid, function (dataJSON) {
        var data = JSON.parse(dataJSON);
        var ary = [], timeList = [];
        for (var k = 0; k < data.length; k++) {
            var now = new Date(data[k].t * 1000);
            var format = now.getFullYear() + '/' + numeral((now.getMonth() + 1)).format('00')
                    + '/' + numeral(now.getDate()).format('00') + ' ' + numeral(now.getHours()).format('00')
                    + ':' + numeral(now.getMinutes()).format('00')+ ':' + numeral(now.getSeconds()).format('00');
            if (trace == 'sec') {
                ary.push({ name: format, value: [format, data[k].v] });
            }
            else {
                timeList.push(format);
                ary.push([data[k].start, data[k].end, data[k].low, data[k].high]);
            }
        }
        //更新折线图
        switch (trace) {
            case 'min5':
            case 'min15':
                KOption.tooltip.formatter = function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return '时间：' + numeral(date.getHours()).format('00') + ":" +
                            numeral(date.getMinutes()).format('00') + '<br/>' +
                            '<table><tr><td>开盘：' + numeral(params.value[1]).format('0.00')
                            + '</td><td style="padding-left:5px;">最低：' + numeral(params.value[3]).format('0.00')
                            + '</td></tr><tr><td>收盘：' + numeral(params.value[2]).format('0.00')
                            + '</td><td style="padding-left:5px;">最高：' + numeral(params.value[4]).format('0.00')
                            + '</td></tr></table>';
                };
                KOption.xAxis.axisLabel.formatter = function (val) {
                    var date = new Date(val);
                    return numeral(date.getHours()).format('00')
                            + ":" + numeral(date.getMinutes()).format('00');
                };
                break;
            case 'hour':
                KOption.tooltip.formatter = function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return '时间：' + numeral((date.getMonth() + 1)).format('00') + "/" +
                            numeral(date.getDate()).format('00') + " " +
                            numeral(date.getHours()).format('00') + '时<br/>' +
                            '<table><tr><td>开盘：' + numeral(params.value[1]).format('0.00')
                            + '</td><td style="padding-left:5px;">最低：' + numeral(params.value[3]).format('0.00')
                            + '</td></tr><tr><td>收盘：' + numeral(params.value[2]).format('0.00')
                            + '</td><td style="padding-left:5px;">最高：' + numeral(params.value[4]).format('0.00')
                            + '</td></tr></table>';
                };
                KOption.xAxis.axisLabel.formatter = function (val) {
                    var date = new Date(val);
                    return numeral((date.getMonth() + 1)).format('00')
                            + "/" + numeral(date.getDate()).format('00')
                            + " " + numeral(date.getHours()).format('00') + '时';
                };
                break;
            case 'day':
                KOption.tooltip.formatter = function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return '时间：' + numeral((date.getMonth() + 1)).format('00') + "/" +
                            numeral(date.getDate()).format('00') + '<br/>' +
                            '<table><tr><td>开盘：' + numeral(params.value[1]).format('0.00')
                            + '</td><td style="padding-left:5px;">最低：' + numeral(params.value[3]).format('0.00')
                            + '</td></tr><tr><td>收盘：' + numeral(params.value[2]).format('0.00')
                            + '</td><td style="padding-left:5px;">最高：' + numeral(params.value[4]).format('0.00')
                            + '</td></tr></table>';
                };
                KOption.xAxis.axisLabel.formatter = function (val) {
                    var date = new Date(val);
                    return numeral((date.getMonth() + 1)).format('00')
                            + "/" + numeral(date.getDate()).format('00');
                };
                break;
        }

        if (trace == 'sec') {
            chartOption.series[0].data = ary;
            myChart.setOption(chartOption, true);
        }
        else {
            KOption.xAxis.data = timeList;
            KOption.series[0].data = ary;
            myChart.setOption(KOption, true);
        }
    });

    //绘图
    socket.emit('goods-trace', {
        tra: trace,
        wid: wid,
        bid: traceNum
    });

    //轮询请求
    window.interval = setInterval(function () {
        var params = {
            tra: trace,
            wid: wid,
            bid: traceNum
        };
        socket.emit('goods-trace', params);
    }, traceList[trace] * 1000);
};

$(function () {

    if (!!window.wid) {
        socket.on('goods-list', function (dataJSON) {
            var payload = JSON.parse(dataJSON);
            for (var k = 0; k < payload.length; k++) {
                if (payload[k].wid !== window.wid) { continue; }
                var $this = $('#last_price');
                $this.text(numeral(payload[k].last).format('0.00'));
                $('#up_price').text(numeral(payload[k].last).format('0.00'));
                $('#down_price').text(numeral(payload[k].last).format('0.00'));
                if (payload[k].last > payload[k].prev) {
                    $this.removeClass().addClass('rise');
                }
                else if (payload[k].last < payload[k].prev) {
                    $this.removeClass().addClass('drop');
                }
                break;
            }
        });
    }

    charHandler('sec');

    $('div.cx_cont ul.line li').click(function () {
        var $this = $(this), trace = $this.attr('data');
        $this.siblings('.crumb').removeClass('crumb');
        $this.addClass('crumb');
        charHandler(trace);
    });
});
