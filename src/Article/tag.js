import React from "react";
import {
  Row,
  Col,
  Input,
  Select,
  Button,
  Pagination,
  Table,
  Form,
  Modal
} from "antd";

const { Option } = Select;
const {TextArea} =Input

class Tag extends React.Component {
  constructor(props) {
    super();
    this.form =React.createRef()
    this.state = {
      name: "",
      currentPage: 1,
      total: 0,
      dataSource: [],
      columns: [
        {
          title: "文章名",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "分类目录",
          dataIndex: "class",
          key: "class",
        },
        {
          title: "标签",
          dataIndex: "tags",
          key: "tags",
        },
        {
          title: "操作",
          dataIndex: "handle",
          key: "handle",
        },
      ],
      visible:false,
    };
  }
  //文章名改变
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
  //点击新增
  addTags=() => {
    this.setState({
      visible:true
    })
  }
  //关闭对话框
  closevisible=()=> {
    this.setState({
      visible:false
    })
  }

  //保存标签
  onFinish=(value) => {
    console.log(this.form)
  }

  render() {
    return (
      <div>
        <div className="filter-content">
          <Row gutter={16}>
            <Col span={5}>
              <div>
                <Input
                  placeholder="标签名"
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
            <Button type="primary" onClick={this.addTags}>
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
              <Button key="submit" type="primary"  onClick={this.onFinish}>
                保存
              </Button>,
            ]}
          >
            <Form
              ref={this.form}
              name="addClass"
              initialValues={{
                remember: true,
              }}
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

export default Tag;

const style = {
  btnWrap: {
    marginBottom: "10px",
  },
};
