function solution(wallpaper) {
    const sx = wallpaper.findIndex((x) => x.indexOf("#") !== -1);
    const sy = Math.min(...wallpaper.map((el) => (el.indexOf("#") === -1 ? el.length : el.indexOf("#"))));
    const ex = wallpaper.length - [...wallpaper.reverse()].findIndex((x) => x.indexOf("#") !== -1);
    const ey = Math.max(...wallpaper.map((el) => (el.lastIndexOf("#") === -1 ? 0 : el.lastIndexOf("#"))));
    return [sx, sy, ex, ey + 1];
}
