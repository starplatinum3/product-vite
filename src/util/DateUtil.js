class DateUtil {
    static getDay(date, day) {
        var today = new Date(date);
        var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
        today.setTime(targetday_milliseconds); //注意，这行是关键代码
        var tYear = today.getFullYear();
        var tMonth = today.getMonth();
        var tDate = today.getDate();
        tMonth = DateUtil.doHandleMonth(tMonth + 1);
        tDate = DateUtil.doHandleMonth(tDate);
        // tMonth = this.doHandleMonth(tMonth + 1);
        // tDate =this. doHandleMonth(tDate);
        return tYear + "-" + tMonth + "-" + tDate;
    }

    static    formatDate(row, column) {
        // 获取单元格数据
        let data = row[column.property];
        let dt = new Date(data);
        return (
            dt.getFullYear() +
            '-' +
            (dt.getMonth() + 1 > 9 ? dt.getMonth() + 1 : '0' + (dt.getMonth() + 1)) +
            '-' +
            (dt.getDate() > 9 ? dt.getDate() : '0' + dt.getDate()) +
            ' ' +
            (dt.getHours() > 9 ? dt.getHours() : '0' + dt.getHours()) +
            ':' +
            (dt.getMinutes() > 9 ? dt.getMinutes() : '0' + dt.getMinutes()) +
            ':' +
            (dt.getSeconds() > 9 ? dt.getSeconds() : '0' + dt.getSeconds())
        );
    }


    static doHandleMonth(month) {
        var m = month;
        if (month.toString().length == 1) {
            m = "0" + month;
        }
        return m;
    }

    static dateInRange(date, dateRange) {
        return dateRange[0] <= date && date <= dateRange[1]

    }
    static dateInRangeStr(date, dateRange) {
        // console.log();
        let dateFrom = new Date(dateRange[0])
        // console.log("dateFrom");
        // console.log(dateFrom);
        let dateTo = new Date(dateRange[1])
        // console.log("dateTo");
        // console.log(dateTo);

        date = new Date(date)
        // 全都是str
        // console.log("date");
        // console.log(date);
        return new Date(dateRange[0]) <= date && date <= new Date(dateRange[1])

    }
}
export default DateUtil;