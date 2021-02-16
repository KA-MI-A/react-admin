import React from 'react'
import {
  Row,
  Col,
  Input,
  Select,
  DatePicker,
  Button,
  Pagination,
  Table,
} from "antd";

const { Option } = Select;
const { RangePicker } = DatePicker;

class SysUser extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      tags: "",
      time: "",
      options: [
        {
          id: 1,
          value: "LUCK",
        },
        {
          id: 2,
          value: "KUKI",
        },
        {
          id: 3,
          value: "LILIYA",
        },
      ],
      currentPage: 1,
      total: 0,
      dataSource: [],
      columns: [
        {
          title: "账号名",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "所属角色",
          dataIndex: "class",
          key: "class",
        },
        {
          title: "创建时间",
          dataIndex: "tags",
          key: "tags",
        },
        {
          title: "状态",
          dataIndex: "status",
          key: "status",
        },
        {
          title: "操作",
          dataIndex: "handle",
          key: "handle",
        },
      ],
    };
  }
  //文章名改变
  nameChnage = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  //选择标签
  selectLabelChange = (value) => {
    console.log(value);
    this.setState({
      tags: value,
    });
  };
  //搜索标签改变
  searchLabelChange = (val) => {
    console.log(val);
    this.setState({
      tags: val,
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
  //时间选择
  timeChange = (date, dateString) => {
    this.setState({
      time: date,
    });
  };

  render() {
    const { options } = this.state;
    return (
        <div>
          <div className="filter-content">
            <Row gutter={16}>
              <Col span={5}>
                <div>
                  <Input
                      placeholder="文章名"
                      value={this.state.name}
                      onChange={this.nameChnage}
                  />
                </div>
              </Col>
              <Col span={5}>
                <div>
                  <Select
                      style={{ width: "100%" }}
                      allowClear
                      showSearch
                      value={this.state.tags}
                      placeholder="选择标签"
                      optionFilterProp="label"
                      onChange={this.selectLabelChange}
                      onSearch={this.searchLabelChange}
                      filterOption
                  >
                    {options.length &&
                    options.map((item, index) => {
                      return (
                          <Option
                              key={item.id}
                              value={item.id}
                              label={item.value}
                          >
                            {item.value}
                          </Option>
                      );
                    })}
                  </Select>
                </div>
              </Col>
              <Col span={4} offset={10}>
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
        </div>
    );
  }
}

export default SysUser
