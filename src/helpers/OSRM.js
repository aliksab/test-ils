export const getPolylinesFromRes = (res) => {
  return res.data.routes[0];
};

export const parsePoints = (points)=> {
    let res = "";
    for (const point of points){
        res += point[0] + "," + point[1] + ";";
    }
    return res.slice(0, -1);
};