import React, { useState } from "react";
import { Button, Modal, Select, DatePicker, Space, Row, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { DatePickerProps } from "antd";

import axios from "axios";
interface UserInterface {
  label: string | null;
  value: number | null;
}

const Store: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(0);
  const [q, setQ] = useState("");
  const [year, setYear] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const optionsUser = [
    { value: 1, label: "Kew" },
    { value: 2, label: "Liverpool" },
  ];
  const optionsQ = [
    { value: "Q1", label: "Q1" },
    { value: "Q2", label: "Q2" },
    { value: "Q3", label: "Q3" },
    { value: "Q4", label: "Q4" },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    var formData = new FormData();

    // @ts-ignore
    formData.append("userId", user);
    // @ts-ignore
    formData.append("q", q);
    formData.append("year", year);
    // @ts-ignore
    formData.append("file", file);

    const result = axios.post("http://localhost:3001/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(result);
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
  const onChangeQ = (value: string) => {
    let selectedQ = optionsQ.find((item: any) => item.value === value);
    if (selectedQ) {
      setQ(selectedQ.value);
    }
  };

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setYear(dateString);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Store POS
      </Button>
      <Modal
        title="Upload File"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row gutter={[16, 16]}>
          <Select
            showSearch
            placeholder="Select a User"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={optionsUser}
            style={{ width: "50%" }}
          />
        </Row>
        <Row gutter={[16, 16]}>
          <Space direction="vertical" style={{ width: "50%" }}>
            <DatePicker onChange={onChangeDate} picker="year" />
          </Space>
        </Row>
        <Row gutter={[16, 16]}>
          <Select
            showSearch
            placeholder="Select a Q"
            optionFilterProp="children"
            onChange={onChangeQ}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={optionsQ}
            style={{ width: "50%" }}
          />
        </Row>
        <Row gutter={[16, 16]}>
          <Space direction="vertical" style={{ width: "100%" }} size="large">
            <Upload
              maxCount={1}
              beforeUpload={(file) => {
                console.log(file);
                setFile(file);
                return false;
              }}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Space>
        </Row>
      </Modal>
    </>
  );
};

export default Store;
