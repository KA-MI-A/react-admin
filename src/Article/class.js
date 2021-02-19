import React from "react";
import {
  Row,
  Col,
  Input,
  Select,
  DatePicker,
  Button,
  Pagination,
  Table,
  Modal,
  Form,
} from "antd";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

class ClassArticle extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      currentPage: 1,
      total: 0,
      dataSource: [],
      columns: [
        {
          title: "标签名",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "别名",
          dataIndex: "other",
          key: "other",
        },
        {
          title: "描述",
          dataIndex: "desc",
          key: "desc",
        },
        {
          title: "文章数",
          dataIndex: "num",
          key: "num",
        },
      ],
      visible: false,
    };
  }
  nameChnage = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  //页码改变
  onChangeCurrentPage = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  //重置按钮
  reset = () => {
    this.setState({
      name: "",
      tags: "",
    });
  };
  //点击新增按钮
  addClass = () => {
    this.setState({
      visible: true,
    });
  };
  //model点击取消
  closevisible = () => {
    this.setState({
      visible: false,
    });
  };
  //表单提交事件
  onFinish = () => {};

  render() {
    return (
      <div>
        <div className="filter-content">
          <Row gutter={16}>
            <Col span={5}>
              <div>
                <Input
                  placeholder="分类目录名"
                  value={this.state.name}
                  onChange={this.nameChnage}
                />
              </div>
            </Col>
            <Col span={4} offset={15}>
              <div>
                <Button className="fr resetBtn" onClick={this.reset}>
                  重置
                </Button>
                <Button className="fr" type="primary">
                  搜索
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="table-content">
          <div className="btnWrap" style={style.btnWrap}>
            <Button type="primary" onClick={this.addClass}>
              新增
            </Button>
          </div>
          <Table
            style={{ height: `calc(100vh - 260px)` }}
            bordered
            dataSource={this.state.dataSource}
            columns={this.state.columns}
          />
        </div>
        <div className="footer-content">
          <Pagination
            size="small"
            current={this.state.current}
            onChange={this.onChangeCurrentPage}
            total={this.state.total}
          />
        </div>
        <div className="addClassWrap">
          <Modal
            visible={this.state.visible}
            onCancel={this.closevisible}
            title="添加分类目录"
            footer={[
              <Button key="back" onClick={this.closevisible}>
                取消
              </Button>,
              <Button key="submit" type="primary" onClick={this.closevisible}>
                保存
              </Button>,
            ]}
          >
            <Form
              name="addClass"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              layout="vertical"
            >
              <Form.Item
                label="名称"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "请输入目录名",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="别名" name="othername">
                <Input />
              </Form.Item>
              <Form.Item label="父级分类目录" name="parent">
                <Select style={{ width: `100%` }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Form.Item>
              <Form.Item label="描述" name="desc">
                <TextArea rows={5} />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ClassArticle;

const style = {
  btnWrap: {
    marginBottom: "10px",
  },
};
