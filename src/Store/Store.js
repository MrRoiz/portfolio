import moment from 'moment'
import create from 'zustand'

export default create((set,get) => ({
    birthDate : '1997-03-12',
    getAge : ()=>{
        return moment().diff(get().birthDate,'years')
    },
    startedAt : '2019-04-01',
    getExperienceTime : ()=>{
        return moment().diff(get().startedAt,'years',true).toFixed(1)
    }
}))