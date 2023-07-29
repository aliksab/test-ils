export const getPolylinesFromRes = (res) => {
  return res.data.routes[0];
};

export const parsePoints = (points)=> {
    console.log(points);
    let res = "";
    for (const point of points){
        res += point[0] + "," + point[1] + ";";
    }
    console.log(res.slice(0, -1));
};