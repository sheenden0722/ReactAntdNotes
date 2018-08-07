/**
 * 作者：sheenden0722
 * 创建日期：2018-07-26
 * 邮件：
 * 文件说明：
 */
import React from 'react';
import { Tabs } from 'antd';
import BasicInfo from './basicInfo';
import ProjMilestone from './projMilestone';
import CostBudgetEdit from './costBudgetEdit';
import ProjAttach from './projAttach';
const {TabPane} = Tabs;

export default class ProjInfo extends React.PureComponent{

    /**
     * 作者：sheenden0722
     * 创建日期：2018-06-15
     * 功能：直接处理tab切换，不加任何处理
     * @param key tab的key
     */
    tabChangeClick = (key) => {
        this.props.dispatch({
            type: 'projHistoryDetail/tabChangeClick',
            key: key,
        });
    };

    render(){
        return (
            <div>
                <Tabs
                    activeKey={this.props.currentTabKey}
                    onTabClick={this.tabChangeClick}
                >
                    <TabPane
                        tab='基本信息'
                        key="t1"
                    >
                        <BasicInfo
                            ref='basicInfo'
                            key={this.props.basicInfoUuid}
                            basicInfoData={this.props.basicInfoData}
                        />
                    </TabPane>
                    <TabPane
                        tab='里程碑'
                        key="t2"
                    >
                        <ProjMilestone
                            ref='projMilestone'
                            mileStoneList={this.props.mileStoneList}
                        />
                    </TabPane>
                    <TabPane
                        tab='成本预算'
                        key="t3"
                    >
                        <CostBudgetEdit
                            ref='costBudgetEdit'
                            budgetDataTable={this.props.budgetDataTable}
                        />
                    </TabPane>
                    <TabPane
                        tab='立项文件'
                        key="t4"
                    >
                        <ProjAttach
                            ref='projAttach'
                            attachmentList={this.props.attachmentList}
                        />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
