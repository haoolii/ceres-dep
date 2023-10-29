import { useState } from 'react';

import {
  Button,
  Input,
} from '@chakra-ui/react';

import { Nav } from '../components/Nav';
import {
  calc,
  Units,
  UnitsEnum,
} from '../utils';

export const Unit = () => {
  const [平方公尺, set平方公尺] = useState<number>();
  const [坪, set坪] = useState<number>();
  const [公頃, set公頃] = useState<number>();
  const [甲, set甲] = useState<number>();
  const [分, set分] = useState<number>();
  const [公畝, set公畝] = useState<number>();
  const [英畝, set英畝] = useState<number>();
  const [市畝, set市畝] = useState<number>();
  const [lastSelected, setLastSelected] = useState<UnitsEnum>();
  const calcAll = () => {
    if (lastSelected === UnitsEnum.坪 && 坪) {
      setAll(calc(lastSelected, 坪))
    }
  };
  const setAll = (unit: Units) => {
    set平方公尺(unit.平方公尺)
    set坪(unit.坪)
    set公頃(unit.公頃)
    set甲(unit.甲)
    set分(unit.分)
    set公畝(unit.公畝)
    set英畝(unit.英畝)
    set市畝(unit.市畝)
    // {
    //   平方公尺: number;
    //   坪: number;
    //   公頃: number;
    //   甲: number;
    //   分: number;
    //   公畝: number;
    //   英畝: number;
    //   市畝: number;
    // }
  };
  return (
    <div className="">
      <Nav />
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <label style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 140, padding: "0 24px" }}>平方公尺</div>
          <Input
            type="number"
            onBlur={(_) => setLastSelected(UnitsEnum.平方公尺)}
            value={平方公尺}
            onChange={(e) => set平方公尺(+e.target.value)}
          />
        </label>
        <label style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 140, padding: "0 24px" }}>坪</div>
          <Input
            type="number"
            onBlur={(_) => setLastSelected(UnitsEnum.坪)}
            value={坪}
            onChange={(e) => set坪(+e.target.value)}
          />
        </label>
        <label style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 140, padding: "0 24px" }}>公頃</div>
          <Input
            type="number"
            onBlur={(_) => setLastSelected(UnitsEnum.公頃)}
            value={公頃}
            onChange={(e) => set公頃(+e.target.value)}
          />
        </label>
        <label style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 140, padding: "0 24px" }}>甲</div>
          <Input
            type="number"
            onBlur={(_) => setLastSelected(UnitsEnum.甲)}
            value={甲}
            onChange={(e) => set甲(+e.target.value)}
          />
        </label>
        <label style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 140, padding: "0 24px" }}>分</div>
          <Input
            type="number"
            onBlur={(_) => setLastSelected(UnitsEnum.分)}
            value={分}
            onChange={(e) => set分(+e.target.value)}
          />
        </label>
        <label style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 140, padding: "0 24px" }}>公畝</div>
          <Input
            type="number"
            onBlur={(_) => setLastSelected(UnitsEnum.公畝)}
            value={公畝}
            onChange={(e) => set公畝(+e.target.value)}
          />
        </label>
        <label style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 140, padding: "0 24px" }}>英畝</div>
          <Input
            type="number"
            onBlur={(_) => setLastSelected(UnitsEnum.英畝)}
            value={英畝}
            onChange={(e) => set英畝(+e.target.value)}
          />
        </label>
        <label style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 140, padding: "0 24px" }}>市畝</div>
          <Input
            type="number"
            onBlur={(_) => setLastSelected(UnitsEnum.市畝)}
            value={市畝}
            onChange={(e) => set市畝(+e.target.value)}
          />
        </label>
        <div style={{ padding: "24px 128px" }}>
          <Button
            colorScheme="teal"
            size="md"
            style={{ width: "120px" }}
            onClick={(_) => {
              calcAll();
            }}
          >
            計算
          </Button>
        </div>
      </div>
      <footer>
        <div className="h-10"></div>
      </footer>
    </div>
  );
};
