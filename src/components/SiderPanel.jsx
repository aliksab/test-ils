import { Radio, Space } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const SiderPanel = () => {
  const dispatch = useDispatch()
  const getState = useSelector((state) => state.routers);
  const [value, setValue] = useState(1);
  const getRoute = [];
  let checkRoute = getState.findIndex(el => {
    if (el.checked === true) {
      return el
    } 
  });
  getState[checkRoute].routes.map(el => {
    return getRoute.push(el.geocode);
  })
  const onChange = (e) => {
    dispatch({type: "toggle/route", payload: {id: e.target.value, point: getRoute} });
    setValue(e.target.value);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-panel">
        <div className="header">
          <h1>Выберите маршрут</h1>
        </div>
        <div className="menu">
          {getState.map((items) => {
            return (
              <Radio.Group className="item" onChange={onChange} value={value} key={items.id}>
                <Space direction="vertical">
                  <Radio.Button value={items.id} style={{ height: '100%' }} >
                    <h3>Маршрут №{items.id}</h3>
                    {items.routes.map(item => {
                      return <p key={item.point}>Точка {`${item.point}`}: {`${item.geocode[0]}, ${item.geocode[1]}`}</p>
                    })}
                  </Radio.Button>
                </Space>
              </Radio.Group>
            )
          })}
        </div>        
      </div>      
    </div>
  );
}

export default SiderPanel;