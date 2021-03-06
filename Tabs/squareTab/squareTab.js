/**
 * 作者：sheenden0722
 * 创建日期：2018-07-26
 * 邮件：
 * 文件说明：圆角形tab组件
 */
import React from 'react';
import styles from './squareTab.less';

class SquareTab extends React.Component{

    /**
     * 作者：sheenden0722
     * 创建日期：2018-07-26
     * 功能：tab切换
     */
    clickSquareTab = (key) => {
        this.props.onTabsClick(key);
    };

    render(){
        return (
            <div>
                <div >
                    {
                        React.Children.map(
                            this.props.children.filter(item=>(item !== '' && item !== null)),
                            (element)=>{
                            return(
                                <span style={{width:100}}>
                                    <span
                                        onClick={()=>this.clickSquareTab(element.props.num)}
                                        className={
                                            element.props.num === this.props.activeKey
                                                ?
                                                styles.titleStyleActive
                                                :
                                                styles.titleStyle
                                        }
                                    >
                                        {element.props.name}
                                    </span>&nbsp;&nbsp;&nbsp;
                                </span>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        React.Children.map(
                            this.props.children.filter(item=>(item !== '' && item !== null)),
                            (element)=>{
                            return(
                                <div
                                    className={
                                        element.props.num === this.props.activeKey
                                            ?
                                            styles.display
                                            :
                                            styles.displayNone
                                    }
                                >
                                    { element }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SquareTab;
