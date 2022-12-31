import BackArrowNav from '../../components/back_arrow_nav/back_arrow_nav';
import './topbar.css';

export default function Topbar(
{
    beforeBack
})
{
    return (
        <div id='topbar'>
            <div id='left'>
                <BackArrowNav beforeBack={beforeBack}/>
            </div>
            <div id='center'>
                
            </div>
            <div id='right'>
                
            </div>
        </div>
    );
}