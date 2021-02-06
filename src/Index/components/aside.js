import React ,{Fragment} from 'react'
import './aside.less'
import AsideMenu from "../../../components/asideMenu/index"
class Aside extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <Fragment>
          <h1 className="logo">
            <span>
              LOGO
            </span>
          </h1>
          <AsideMenu />
        </Fragment>
    )
  }
}

export default Aside
