import React from "react";
import { Input, Row, Col,Checkbox  } from "antd";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import './addArticle.less'

// 初始化Markdown解析器
const mdParser = new MarkdownIt(/* Markdown-it options */);

class AddArticle extends React.Component {
  constructor(props){
    super()
    this.state={
      title:'',
      content:''
    }
  }

  handleEditorChange=(html,text) => {
    this.setState({
      content:html.html
    })
  }

  selectClass=(checkedValues) => {
    console.log(checkedValues)
  }

  render() {
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    return (
      <div className="add-article-wrap">
        <h3>新建文章</h3>
        <div className='title'>
          <Input size="large" placeholder='请输入标题' />
        </div>
        <div className="markdown-wrap">
          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
          />
        </div>
        <div className='class-wrap'>
          <h4>分类目录</h4>
          <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={this.selectClass} />
        </div>
      </div>
    );
  }
}

export default AddArticle;
