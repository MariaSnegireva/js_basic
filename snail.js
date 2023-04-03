function snail(column, day, night) {
    if (day - night >= column) {
        return 1;
    }
    for (let i = night; night < column; i++) {
        if (day - night === 1) {
            return column - night;
        } else if (day - night > 1) {
            return Math.round(column / (day - night));
        }
    }
}
