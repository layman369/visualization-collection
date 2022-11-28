/**
 * 背景效果
 */
import React from "react";
import GridContent from "components/GridContent";
import styles from "./index.module.less";

const { GridBox } = GridContent;
const gridboxList = new Array(7).fill("1");

const BackgroundEffect = () => {
  return (
    <div className={styles.container}>
      <GridContent
        differentScreenCols={[4, 3, 3, 2, 2]}
        rowSpace={8}
        colSpace={8}
      >
        {gridboxList.map(
          (item: { element: React.ReactNode }, index: number) => (
            <GridBox key={index}>
              <div className={styles.box}>
                <div className={styles[`bg${index + 1}`]} />
              </div>
            </GridBox>
          )
        )}
      </GridContent>
    </div>
  );
};

export default BackgroundEffect;