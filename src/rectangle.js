const area = (l,w) => {
    let ans = l * w;

    console.log("Area of Rectangle",ans);
}

const parimter = (l,w) => {
    let ans = 2 * (l + w);
    return ans
}

module.exports = {
    area,
    parimter
}