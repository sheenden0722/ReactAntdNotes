/**
 * 作者：sheenden0722
 * 创建日期：2018-06-28
 * 邮件：
 * 文件说明：
 */
import React from 'react';
import { Modal, Icon, Button } from 'antd';

/**
 * 作者：sheenden0722
 * 创建日期：2018-06-28
 * 功能：
 */
export default class TabChangeModal extends React.PureComponent {
    constructor(props) {super(props);}
    state = {
        modalVisible: false,
    };

    /**
     * 作者：sheenden0722
     * 创建日期：2018-06-28
     * 功能：
     */
    showModal = () => {
        this.setState({
            modalVisible: true
        });
    };

    /**
     * 作者：sheenden0722
     * 创建日期：2018-06-28
     * 功能：
     */
    handleModal = (flag) => {
        if (flag === 'confirm') {
            //处理“确定”操作
        }
        else if (flag === 'cancel') {
            //处理“取消”操作
        }
        else if (flag === 'close') {
            //处理“关闭”操作
        }
        this.setState({
            modalVisible: false
        });
    };

    render(){

        return (
            <Modal
                onCancel={() => this.handleModal('close')}
                width={'500px'}
                visible={this.state.modalVisible}
                maskClosable={false}
                footer={[
                    <Button
                        key="cancel"
                        type="primary"
                        onClick={() => this.handleModal('cancel')}
                    >取消
                    </Button>,
                    <Button
                        key="confirm"
                        type="primary"
                        onClick={() => this.handleModal('confirm')}
                    >确定
                    </Button>,
                ]}
            >
                <div style={{fontWeight:'bold',fontSize:20,marginTop:20,textAlign:'center'}}>
                    <Icon
                        type='question-circle-o'
                        style={{fontSize:20,color:'#ffbf00'}}
                    />
                    &nbsp;&nbsp;
                    {'确定当前操作吗?'}
                </div>
            </Modal>
        );
    }
}

