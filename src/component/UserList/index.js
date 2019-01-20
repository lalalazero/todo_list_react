import React, { Component } from  'react'
import Search from '../Search';
import * as listAction from '../../action/list'
import './style.scss'
import { SET_CURRENT_LIST } from '../../constants';

export default class UserList extends Component {
    constructor(props){
        super(props)
        this.state = {
            //activeList: 'inbox',
            modal: false,
            listName: '',
            showEdit: false,
        
        }
        this.editListId = ''
    }
    handleListClick = (e) => {
        const index = e.currentTarget.getAttribute('index')
        console.log('当前activeList的下标是 => ', e.currentTarget.getAttribute('index'))
        const label = e.currentTarget.getAttribute('label')
        this.props.history.push({
            pathname: `/tasks/${label}`,
            state: {
                activeIndex: index,
            }
        })
        this.props.dispatch({
            type: SET_CURRENT_LIST,
            index: index - 0 // 转为数字
        })
        // this.setState({
        //     activeList: label
        // })
        if (/^\d{1,}$/.test(label)) { // 纯数字，至少一位
            this.editListId = label
        }
    }
    modalClick = (e) => {
        if (e.currentTarget === e.target) {
            this.setState({
                modal: false,
                showEdit: false,
            })
        }
    }
    hideModal = () => {
        this.setState({
            modal: false,
            showEdit: false,
        })
    }
    openModal = () => {
        this.setState({
            modal: true,
            listName: ''
        })
    }
    openEdit = (name) => {
        this.setState({
            showEdit: true,
            listName: name,
        })
    }
    createList = () => {
        const { listName } = this.state
        if (listName.length > 0) {
            this.props.dispatch(listAction.create(listName))
            this.setState({
                listName: '',
                modal: false,
            })
        }
    }

    editList = () => {
        const { listName } = this.state
        if (listName.length > 0) {
            this.props.dispatch(listAction.update(listName, this.editListId))
            this.setState({
                showEdit: false,
                listName: '',
            })
        }
    }

    deleteList = () => {
        this.props.dispatch(listAction.remove(this.editListId))
        this.setState({
            showEdit: false,
            listName: '',
        })
    }


    handleInput = (e) => {
        this.setState({
            listName: e.target.value
        })
    }
    render(){
        const { onFold, lists, activeIndex } = this.props
        const { modal, listName, showEdit } = this.state
        
        const image = 'https://lalalazero.top/todo/selfie/my.png'
        return(
            <div className='unflod-nav-layout'>
                <div name='menu'>
                    <i className='iconfont icon-cc-menu-more' onClick={onFold}></i>
                    <Search></Search>
                </div>
                
                <div name='userInfo'>
                    <img src={image} alt='userimage'/>
                    <i className='iconfont icon-bottom'></i>
                </div>
                <ul>
                    {
                        lists.map((list, index) => {
                            if (list.userCreate === 0) {
                                if (list.name === '计划') {
                                    return (
                                        <li key={index}
                                            className={activeIndex === index ? 'active' : ''}
                                            label='inbox' 
                                            index={index}
                                            onClick={this.handleListClick}
                                        >
                                            <i className='iconfont icon-box1'></i>
                                            <span>计划</span>
                                        </li>
                                    )
                                } else if (list.name === '今天') {
                                    return (
                                        <li key={index}
                                            className={activeIndex === index ? 'active' : ''}
                                            label='today' 
                                            index={index}
                                            onClick={this.handleListClick}
                                        >
                                            <i className='iconfont icon-ic-today' />
                                            <span>今天</span>
                                        </li>
                                    )
                                } else if (list.name === '星标') {
                                    return (
                                        <li key={index}
                                            className={activeIndex === index ? 'active' : ''}
                                            label='star' 
                                            index={index}
                                            onClick={this.handleListClick}
                                        >
                                            <i className='iconfont icon-star' />
                                            <span>星标</span>
                                        </li>
                                    )
                                }
                                return ''
                            } else {
                                return (
                                    <li key={index}
                                        className={activeIndex === index ? 'active' : ''}
                                        label={list.id}
                                        index={index}
                                        onClick={this.handleListClick}
                                        >
                                        <i className='iconfont icon-box'></i>
                                        <span>{list.name}</span>
                                        <i className='iconfont icon-pen' onClick={ () => this.openEdit(list.name)}></i>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <div name='add' onClick={this.openModal}>
                    <i className='iconfont icon-plus'></i>
                    <span>创建清单</span>
                </div>
                {
                    modal && <div id='createList-modal' onClick={this.modalClick}>
                                <div>
                                    <h3>自定义清单</h3>
                                    <input value={listName} onInput={this.handleInput} 
                                        onKeyDown={e => e.keyCode === 13 && this.createList()}
                                        onChange={this.handleInput} placeholder='输入清单名字'></input>
                                    <div>
                                        <button onClick={this.hideModal}>取消</button>
                                        <button disabled={listName.length <= 0} onClick={this.createList}>创建</button>
                                    </div>
                                </div>
                            </div>
                }
                {
                    showEdit && <div id='editList-modal' onClick={this.modalClick}>
                                    <div>
                                        <h3>自定义清单</h3>
                                        <input value={listName} onInput={this.handleInput} 
                                            onKeyDown={e => e.keyCode === 13 && this.editList()}
                                            onChange={this.handleInput} placeholder='输入清单名字'></input>
                                        <div>
                                            <button onClick={this.hideModal}>取消</button>
                                            <button disabled={listName.length <= 0} onClick={this.editList}>修改</button>
                                            <button onClick={this.deleteList}>删除</button>
                                        </div>
                                    </div>
                                </div>
                }
            </div>
        )
    }
}