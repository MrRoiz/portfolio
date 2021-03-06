import UseStore from '../../../Store/Store'

export default function InformationView(){
    const {age, experienceTime} = UseStore(state=>({
        age : state.getAge(),
        experienceTime : state.getExperienceTime(),
    }))

    return (
        <div className='is-flex is-flex-wrap-wrap'>
            <div className='content'>
                <h1 className='title has-text-white'>About me</h1>
                <p className='subtitle has-text-white'>I'm {age} years old, with {experienceTime} years of experience in software development</p>
            </div>
            
        </div>
    )
}