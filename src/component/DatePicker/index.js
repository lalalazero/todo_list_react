import React, { Component } from 'react'
import  './style.scss'
import helper from './helper'
export default class DatePicker extends Component {

    constructor(props){
        super(props)
        this.state = {
            dateArr: [],
            date: new Date()
        }
    }

    componentDidMount(){
        this.fillDate()
    }

    fillDate(){
        const { date } = this.state
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

    render(){
        const { dateArr, date } = this.state
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
            console.log('rows ',rows)
        }
        
        return(
            <div className='date-picker'>
                <div className='date-picker-header'>
                    <span>
                        <i className='iconfont icon-icon-test'></i>
                    </span>
                    <span>
                        <i className='iconfont icon-left'>
                        </i>
                    </span>
                    <span>2019年1月</span>
                    <span>
                        <i className='iconfont icon-htbarrowright02'></i>
                    </span>
                    <span>
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
                        rows.map(row => row.length > 0 && <div className='date-picker-week-row'>
                        {
                            row.map((item,index)=><span className='date-picker-date-cell' 
                            fade={item.getMonth() === month ? 'no' : 'yes'}
                            key={index}>{item.getDate()}</span>)
                        }
                        </div>)
                    }
                </div>
                <div className='date-picker-actions'>
                    今天
                </div>
            </div>
        )
    }
}


