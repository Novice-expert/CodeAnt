import React, { useState } from 'react'
import './Index.css'
import logoSmall from '../../assets/logoSmall.svg'
import logoGithub from '../../assets/githubLogo.svg'
import logoBitBucket from '../../assets/bitBucketlogo.svg'
import devOps from '../../assets/devOpsLogo.svg'
import gitlab from '../../assets/gitlabLogo.svg'
import leftImg from '../../assets/leftImage.svg'
import ssoLogo from '../../assets/ssoLogo.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function LoginComp() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState('SAAS');
    const notifyGithub = () => {
        navigate('/repository?platform=github'); 
    };
    
    const notifyGitlab = () => {
        navigate('/repository?platform=gitlab');
    };
    
    const notifyAzure = () => {
        navigate('/repository?platform=azure');
    };
    
    const notifyBitbucket = () => {
        navigate('/repository?platform=bitbucket');
    };
    
    const notifySSO = () => {
        navigate('/repository?platform=sso');
    };

    

  return (
    <div className='mainLogin'>
     <div className='leftPart flex flex-col justify-center'>
        <img src={leftImg}/>
     </div>
     <div className='flex flex-col rightContPadd'>
     <div className='flex flex-col rightPart'>
     <div className='flex flex-row gap-3 justify-center'>
         <div className='logoSmall'><img style={{width:"100%",height:"100%"}} src={logoSmall}/></div>
         <div className='font-inter codeAntText flex flex-col justify-center'>CodeAnt AI</div>
     </div>
     <div className='welcomeText flex flex-row justify-center'>Welcome to CodeAnt AI</div>
     <div className="flex flex-row justify-between buttonsSection">
     <div
       onClick={() => setSelected('SAAS')}
       className={`flex flex-row justify-center items-center cursor-pointer ${
         selected === 'SAAS' ? 'bg-blue-600 text-white rounded-md font-inter' : 'bg-white text-black font-inter'
       }`}
       style={{ width: '50%', padding: '10px', transition: 'background-color 0.3s' }}
     >
       <div className="flex flex-col justify-center">SAAS</div>
     </div>

     <div
       onClick={() => setSelected('Self Hosted')}
       className={`flex flex-row justify-center items-center cursor-pointer ${
         selected === 'Self Hosted' ? 'bg-blue-600 text-white rounded-md font-inter' : 'bg-white text-black font-inter'
       }`}
       style={{ width: '50%', padding: '10px', transition: 'background-color 0.3s' }}
     >
       <div className="flex flex-col justify-center">Self Hosted</div>
     </div>
   </div>

   {selected === 'SAAS' && 

    <div className='buttonsContainer flex flex-col'>
    <div className='flex flex-row justify-center gap-2'>
        <div className='buttonFirst flex flex-row justify-center gap-2 ' style={{width:"80%"}} onClick={notifyGithub} >
            <div className=''><img src={logoGithub}/></div>
            <div className='optSignInText'>Sign in with Github</div>
        </div>
    </div>
    <div className='flex flex-row justify-center gap-2'>
        <div className='buttonFirst flex flex-row justify-center gap-2 ' style={{width:"80%"}} onClick={notifyBitbucket}>
            <div className=''><img src={logoBitBucket}/></div>
            <div className='optSignInText'>Sign in with Bitbucket</div>
        </div>
    </div>
    <div className='flex flex-row justify-center gap-2'>
        <div className='buttonFirst flex flex-row justify-center gap-2 ' style={{width:"80%"}} onClick={notifyAzure}>
            <div className=''><img src={devOps}/></div>
            <div className='optSignInText'>Sign in with Azure Devops</div>
        </div>
    </div>
    <div className='flex flex-row justify-center gap-2'>
        <div className='buttonFirst flex flex-row justify-center gap-2 ' style={{width:"80%"}} onClick={notifyGitlab}>
            <div className=''><img src={gitlab}/></div>
            <div className='optSignInText'>Sign in with GitLab</div>
        </div>
    </div>

</div>
   }
 {selected === 'Self Hosted' && 
  <div className='buttonsContainer flex flex-col'>
    <div className='flex flex-row justify-center gap-2'>
        <div className='buttonFirst flex flex-row justify-center gap-2 ' style={{width:"80%"}} onClick={notifyGitlab}>
            <div className=''><img src={gitlab}/></div>
            <div className='optSignInText'>Self Hosted Gitlab</div>
        </div>
    </div>
    <div className='flex flex-row justify-center gap-2'>
        <div className='buttonFirst flex flex-row justify-center gap-2 ' style={{width:"80%"}} onClick={notifySSO}>
            <div className=''><img src={ssoLogo}/></div>
            <div className='optSignInText'>Sign in with SSO</div>
        </div>
    </div>
  

</div>

 }

   


     </div>
  <div className='loginText font-inter flex flex-row justify-center'>By signing up you agree to the 
  <b>&nbsp;Privacy Policy</b>.
  </div>
     </div>
   
     <ToastContainer />
    </div>
  )
}

export default LoginComp
