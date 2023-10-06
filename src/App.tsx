import React, { useState } from "react";
import { Button, Modal, Select, DatePicker, Space } from "antd";
import type { DatePickerProps } from "antd";
interface UserInterface {
  label: string | null;
  value: number | null;
}
const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(0);
  const [q, setQ] = useState(0);
  const optionsUser = [{ value: 1, label: "User" }];
  const optionsQ = [
    { value: 1, label: "Q1" },
    { value: 1, label: "Q2" },
    { value: 3, label: "Q3" },
    { value: 4, label: "Q4" },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (value: number) => {
    let selectedUser = optionsUser.find(
      (item: UserInterface) => item.value === value
    );
    if (selectedUser) {
      setUser(selectedUser.value);
    }
  };
  const onChangeQ = (value: number) => {
    let selectedQ = optionsQ.find((item: any) => item.value === value);
    if (selectedQ) {
      setQ(selectedQ.value);
    }
  };

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const styles = {
    marginRight: "15px",
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Store POS
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="ant-col ant-form-item-label">
          <label
            htmlFor="key"
            className="ant-form-item-required"
            title="Club Master Key"
          >
            Select User
          </label>
        </div>
        <Select
          showSearch
          placeholder="Select a User"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={optionsUser}
        />

        <Space direction="vertical">
          <DatePicker onChange={onChangeDate} picker="year" />
        </Space>

        <Select
          showSearch
          placeholder="Select a Q"
          optionFilterProp="children"
          onChange={onChangeQ}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={optionsQ}
        />
      </Modal>
    </>
  );
};

export default App;
