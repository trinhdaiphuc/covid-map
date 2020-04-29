import React, { useEffect } from "react";
import { FixedSizeList as List, areEqual } from "react-window";
import { Button } from "react-bootstrap";

const Row = React.memo(({ data, index, style }) => {
  const { items, onPatientListClicked, currentPatientIndex } = data;
  const item = items[index];
  const isActive = index === currentPatientIndex ? "primary" : "light";
  const newStyle = { ...style, border: `1px solid #000000` };
  return (
    <Button
      onClick={() => onPatientListClicked(item, index)}
      variant={isActive}
      style={newStyle}
    >
      <div className="list-row">{item.name}</div>
    </Button>
  );
}, areEqual);

const createItemData = (items, onPatientListClicked, currentPatientIndex) => ({
  items,
  onPatientListClicked,
  currentPatientIndex,
});

const PatientList = ({
  patients,
  onPatientListClicked,
  currentPatientIndex,
}) => {
  const totalListItem = patients.length;
  const patientsData = createItemData(
    patients,
    onPatientListClicked,
    currentPatientIndex
  );
  const listRef = React.createRef();
  useEffect(() => {
    if (currentPatientIndex != null) {
      listRef.current.scrollToItem(currentPatientIndex);
    }
  });

  return (
    <div className="list-group">
      <h6>Danh sách bệnh nhân</h6>
      <div id="list-component">
        <List
          ref={listRef}
          height={310}
          itemCount={totalListItem}
          itemSize={35}
          width={"100%"}
          itemData={patientsData}
        >
          {Row}
        </List>
      </div>
    </div>
  );
};

export default React.memo(PatientList);
