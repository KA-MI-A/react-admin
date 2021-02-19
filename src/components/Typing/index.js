import React from 'react'

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}


class Typing extends React.Component {
  static defaultProps = {
    delay: 0,
    frequency: 200,
    done: () => {
    }
  }

  componentDidMount() {
    console.log(this.props)
    this.chain = {
      parent: null,
      dom: this.wrapper,
      val: []
    }
    this.chain.val = this.convent(this.props.children, this.chain.val)
    setTimeout(() => {
      this.play(this.chain)
    }, this.props.delay)
  }

  convent(children, arr = []) {
    let list = arr.slice()
    if (Array.isArray(children)) {
      for (let item of children) {
        list = list.concat(this.convent(item))
      }
    }
    if(isObject(children)){
      const dom=this.createDom({
        ...children.props,
        type:children.type
      })
      const val=this.convent(children.props.children,[])
      list.push({
        dom,
        val
      })
    }
    if(typeof children === 'string'){
      list =list.concat(children.split(''))
    }
    return list
  }


  print(dom,val,callback){
    setTimeout(()=>{
      dom.appendChild(document.createTextNode(val))
      callback()
    },this.props.frequency)
  }

  play=(node)=>{
    if (!node.val.length){
      if(node.parent){
        this.play(node.parent)
      }else{
        this.props.done()
        return
      }
    }
    let current =node.val.shift()
    if (current){
      if (typeof current === "string"){
        this.print(node.dom,current,()=>{
          this.play(node)
        })
      }else{
        let dom=current.dom
        node.dom.appendChild(dom)
        this.play({
          parent:node,
          dom,
          val:current.val
        })
      }
    }
  }

  createDom(info){
    info={...info}
    let dom=document.createElement(info.type)
    delete info.children
    for(let [key,value] of Object.entries(info)){
      if(key === 'className'){
        key='class'
      }
      dom.setAttribute(key,value)
    }
    if (info.style){
      let cssText=''
      for(let [key,value] of Object.entries(info.style)){
        cssText+=`${key}:${value};`
      }
      dom.style.cssText = cssText
    }
    return dom
  }

  render() {
    const {className = '', style = {}} = this.props
    return (
        <div ref={el => this.wrapper = el} className={className} style={style}></div>
    )
  }
}

export default Typing
