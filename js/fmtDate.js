Vue.filter('fmtDate', (value, fmtStr) => {
    return moment(value).format(fmtStr);
});