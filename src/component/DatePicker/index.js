import React, { Component } from 'react'
import  './style.scss'
import helper from './helper'
export default class DatePicker extends Component {

    constructor(props){
        super(props)
        this.state = {
            dateArr: [],
            date: props.date ? new Date(props.date) : new Date(),
            today: new Date()
        }
    }

    componentDidMount(){
        const { date } = this.state
        this.fillDate(date)
    }

    onClickPrevYear = () => {
        const { date } = this.state
        date.setDate(1)
        date.setFullYear(date.getFullYear() - 1)
        this.fillDate(date)
    }

    onClickPrevMonth = () => {
        const { date } = this.state
        date.setDate(1)
        date.setMonth(date.getMonth() - 1)
        this.fillDate(date)
    }

    onClickNextMonth = ()=>{
        const { date } = this.state
        date.setDate(1)
        date.setMonth(date.getMonth() + 1)
        this.fillDate(date)
    }

    
    onClickNextYear = () => {
        const { date } = this.state
        date.setDate(1)
        date.setFullYear(date.getFullYear() + 1)
        this.fillDate(date)
    }

    

    fillDate(date){
        //const { date } = this.state
        const firstDay = helper.firstDayOfMonth(date)
        const lastDay = helper.lastDayOfMonth(date)
        const [year, month, day] = helper.getYearMonthDate(date)
        let thisMonth = []
        for(let i = firstDay.getDate(); i <= lastDay.getDate(); i++){
            thisMonth.push(new Date(year, month, i))
        }
        // console.log('thisMonth =', thisMonth)

        // 判断第一天是星期几，然后补全前面的天数
        let n = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
        // console.log('星期 ', firstDay.getDay())
        // console.log('前面加 ',n)
        let preMonth = []
        for(let i = 0; i < n; i++){
            preMonth.push(new Date(year, month, -i))
        }
        preMonth = preMonth.reverse()
        // console.log('补全前一个月的尾巴..', preMonth)

        let m = 42 - thisMonth.length - n
        let nextMonth = []
        for(let i = 1; i <= m; i++){
            nextMonth.push(new Date(year, month + 1, i))
        }

        // console.log('补全下个月的头..', nextMonth)

        const all = [...preMonth, ...thisMonth, ...nextMonth]
        // console.log('日期面板..', all)

        this.setState({
            dateArr: all
        })

    }

    isSelectDay = (item) => {
        const { date } = this.props
        return date.getDate() === item.getDate() && date.getMonth() === item.getMonth() && date.getFullYear() === item.getFullYear()
    }

    isToday = (item) => {
        const { today } = this.state
        return today.getDate() === item.getDate() && today.getMonth() === item.getMonth() && today.getFullYear() === item.getFullYear()
    }

    

    render(){
        const { dateArr, date } = this.state
        const { onDatePick, clearDate, hasDue } = this.props
        const month = date.getMonth()
        const rows = [[],]
        let z = 0;
        if(dateArr.length > 0){
            for(let i = 1; i <= 6; i++){
                let row = []
                for(let j = 1; j <= 7; j++){
                    row.push(dateArr[z++])
                }
                rows.push(row)
            }
            //console.log('rows ',rows)
        }
        
        return(
            <div className='date-picker'>
                <div className='date-picker-header'>
                    <span onClick={this.onClickPrevYear}>
                        <i className='iconfont icon-icon-test'></i>
                    </span>
                    <span onClick={this.onClickPrevMonth}>
                        <i className='iconfont icon-left'>
                        </i>
                    </span>
                    <span>{date.getFullYear()}年{date.getMonth() + 1}月</span>
                    <span onClick={this.onClickNextMonth}>
                        <i className='iconfont icon-htbarrowright02'></i>
                    </span>
                    <span onClick={this.onClickNextYear}>
                        <i className='iconfont icon-icon-test1'></i>
                    </span>
                </div>
                <div className='date-picker-content'>
                    <div className='date-picker-weekname'>
                        <span className='date-picker-week-cell'>一</span>
                        <span className='date-picker-week-cell'>二</span>
                        <span className='date-picker-week-cell'>三</span>
                        <span className='date-picker-week-cell'>四</span>
                        <span className='date-picker-week-cell'>五</span>
                        <span className='date-picker-week-cell'>六</span>
                        <span className='date-picker-week-cell'>日</span>
                    </div>
                    {
                        rows.map((row, index) => row.length > 0 && <div key={index} className='date-picker-week-row'>
                        {
                            row.map((item,index)=><span key={index} onClick={()=>onDatePick(item)} className='date-picker-date-cell' 
                            fade={item.getMonth() === month ? 'no' : 'yes'}
                            select={hasDue && this.isSelectDay(item) ? 'yes' : 'no'}
                            istoday={this.isToday(item) ? 'yes' : 'no'}
                            >{item.getDate()}</span>)
                        }
                        </div>)
                    }
                </div>
                <div className='date-picker-actions' >
                    <span onClick={()=>onDatePick(new Date())}>今天</span>
                    <span onClick={clearDate}>清除</span>
                </div>
            </div>
        )
    }
}


