import { useState } from 'react';
import {
  carBrands,
  firstFormControls,
  handleInvalidForEmail,
  people,
  todos,
} from '../../../Config/config';

import imageOne from '../../../assets/faces/uifaces-human-image (48).jpg';
import imageTwo from '../../../assets/faces/uifaces-popular-image (1).jpg';
import '../../../index.css';
import {
  Check,
  Cigarette,
  CircleCheck,
  Cloud,
  CloudUpload,
  FileWarning,
  FolderDown,
  MessageCircleWarning,
  Search,
  Stars,
  XIcon,
} from 'lucide-react';
function HoverState() {
  let count = 0;
  const [formData, setFormData] = useState({
    Username: 'Kevin',
    Email: 'kevinlangat@gmail.',
    Password: '123456',
  });
  const [emailValid, setEmailValid] = useState(false);
  const [checkState, setCheckedState] = useState({
    Ferrari: false,
    Lamborghini: true,
    Buggatti: false,
  });
  const [emailTwoValid, setEmailTwoValid] = useState(true);
  const [publishedChecked, setPublishedChecked] = useState(false);
  const [draftChecked, setDraftChecked] = useState(false);

  function handleFileChange(e) {
    console.log(e.target.files);
  }

  const publishDraftChecked = (e) => {
    if (e.target.name === 'publishedChecked') {
      setPublishedChecked(!publishedChecked);
      setDraftChecked(false);
    } else {
      setDraftChecked(!draftChecked);
      setPublishedChecked(false);
    }
  };

  function handleEmailInput(e) {
    if (e.target.value.endsWith('@gmail.com')) {
      setEmailTwoValid(true);
    } else {
      setEmailTwoValid(false);
    }
  }

  function handleChangeBrand(e) {
    if (e.target.name === 'Lamborghini') {
      setCheckedState({
        Ferrari: false,
        Lamborghini: !checkState.Lamborghini,
        Buggatti: false,
      });
    }
    if (e.target.name === 'Ferrari') {
      setCheckedState({
        Ferrari: !checkState.Ferrari,
        Lamborghini: false,
        Buggatti: false,
      });
    }
    if (e.target.name === 'Buggatti') {
      setCheckedState({
        Ferrari: false,
        Lamborghini: false,
        Buggatti: !checkState.Buggatti,
      });
    }
  }

  function handleOnChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // handleInvalidForEmail(emailValid, setEmailValid, e);
  }
  return (
    <div className=' mb-4 flex w-full flex-col gap-8 items-center'>
      {/* First Patch of utility classes */}
      <h2 className=' text-2xl  underline'>Hover,Focus And Other States</h2>
      <div className=' w-full md:w-1/2 flex flex-col items-center justify-center gap-2'>
        <h2 className=' -mt-6 text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          1 :hover, :focus, and :active
        </h2>
        <h3>Hover state</h3>
        <button className=' text-gray-100 w-1/4 h-full bg-green-600 py-1 hover:bg-green-800 border-0 rounded-full'>
          Save & Continue
        </button>
        <h3>Focus State</h3>
        <button className=' text-gray-100 w-1/4 h-full bg-sky-500 py-1 focus:bg-orange-500 border-0 rounded-full'>
          Save & Continue
        </button>
        <h3>Active State</h3>
        <button
          draggable
          className=' text-gray-100 w-1/4 h-full bg-sky-500 py-1 active:bg-gray-500 border-0 rounded-full'
        >
          Save & Continue
        </button>
      </div>

      {/* second patch of utility classes */}

      <div className=' w-full flex flex-col items-center gap-4'>
        <h2 className=' text-[medium] font-bold rounded-full bg-green-500 px-4'>
          2 :first, :last, :odd, and :even
        </h2>
        <div className='w-1/2 gap-4 first:bg-amber-500 odd:border-amber-400 bg-gray-800 rounded-2xl outline-1 outline-white flex flex-col items-center'>
          {people?.map((person) => {
            {
              count++;
            }
            return (
              <div
                className=' flex flex-col even:bg-gray-700 nth-2:rounded-b-none even:rounded-b-2xl items-center py-0.5 gap-1'
                key={person.id}
              >
                <div className=' gap-1 flex h-1/4 flex-row  w-[80%] justify-center items-center '>
                  <img
                    className='w-[15%] odd:outline-1 odd:outline-lime-400 rounded-full h-11/12'
                    src={person.icon}
                    alt=''
                  />
                  <div className=' h-3/4 w-3/5 flex flex-col items-center justify-center'>
                    <h2 className='text-white'>{person.name}</h2>
                    <h3 className=' text-sm text-gray-300'>{person.email}</h3>
                  </div>
                </div>
                <hr
                  className={`${
                    count === 4 ? 'hidden' : 'block text-gray-600 w-11/12'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* Third patch of utility classes */}
      <div className=' flex flex-col items-center w-full gap-2  '>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          3 :nth-*, nth-last-*, :first-of-type-*, :only-child
        </h2>

        <div className=' flex flex-col items-center w-1/2 rounded-2xl bg-sky-600 gap-2'>
          {people.map((person) => (
            <h2
              key={person.id}
              className=' nth-3:underline  nth-last-3:text-gray-600 nth-last-of-type-3:outline nth-last-of-type-3:bg-indigo-200 nth-last-of-type-3:rounded-full nth-last-of-type-3:px-6 nth-last-of-type-3:hover:bg-gray-900'
            >
              {person.name}
            </h2>
          ))}
        </div>
      </div>
      {/* Fourth patch of utility classes */}
      <div className=' flex flex-col items-center w-full gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          4 :required, :disabled, :invalid,
        </h2>
        <form className=' flex flex-col items-center w-1/2 py-3 rounded-2xl gap-2 bg-gray-900 '>
          {firstFormControls.map((formInput) => (
            <div
              className='flex flex-col gap-0.5 items-center'
              key={formInput.id}
            >
              <label className='text-gray-300' htmlFor={formInput.id}>
                {formInput.name}
              </label>
              <input
                name={formInput.name}
                value={formData[formInput.name]}
                onChange={handleOnChange}
                required={formInput?.required}
                disabled={formInput.disabled}
                placeholder={formInput.placeholder}
                type={formInput.input}
                className={`${
                  formInput.name === 'Email'
                    ? 'invalid:text-red-500'
                    : 'text-gray-200'
                } disabled:text-gray-600 invalid:text-red-600 disabled:bg-gray-800 disabled:outline-gray-400 outline-1 required:outline-1 required:outline-orange-400 text-gray-200 py-1 px-6 text-sm outline-gray-200 rounded-2xl placeholder:text-gray-600 pl-3`}
              />
            </div>
          ))}
          <button
            className=' bg-sky-600 px-4 py-1 rounded-2xl text-gray-200'
            type='submit'
          >
            Save Changes
          </button>
        </form>
      </div>
      {/* Fifth Patch of utility classes */}
      <div className=' w-full items-center flex flex-col gap-2 '>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          5 :has(), :has-checked has-[:focus], has-[:active]
        </h2>
        <div className='flex flex-col py-4 items-center w-1/2 rounded-2xl bg-gray-800 gap-4'>
          {carBrands?.map((brand) => (
            <label
              key={brand.id}
              className=' w-11/12 py-5 px-2 flex rounded-2xl justify-between flex-row bg-gray-700 has-checked:bg-indigo-950 has-checked:outline-1 has-checked:outline-indigo-200 has-active:bg-green-800 hover:bg-indigo-600 hover:text-gray-500'
            >
              <h2 className='text-gray-100'>{brand.name}</h2>
              <input
                onChange={handleChangeBrand}
                checked={checkState[brand.manufacturer]}
                type='radio'
                name={brand.manufacturer}
              />
            </label>
          ))}
        </div>
      </div>
      {/* Sixth patch of utility classes */}
      <div className=' w-full flex flex-col items-center gap-4'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          6: Styling based on the descendants of the group
        </h2>

        <div className='w-1/2 gap-4 p-2  bg-gray-800 rounded-2xl outline-1 outline-white flex flex-col items-center'>
          {people?.map((person) => {
            {
              count++;
            }
            return (
              <div
                className=' group flex flex-col items-center '
                key={person.id}
              >
                <div className=' group-has-[a]:bg-gray-700 group-active:bg-sky-600 group-focus:bg-green-500 rounded-2xl  gap-1 flex h-1/4 flex-row w-[80%] justify-center items-center '>
                  <img
                    className='w-[15%] odd:outline-1 odd:outline-lime-400 rounded-full h-[80%]'
                    src={person.icon}
                    alt=''
                  />
                  <div className=' h-3/4 w-3/5 flex flex-col items-center justify-center'>
                    <h2 className='text-white'>{person.name}</h2>
                    <h3 className='  text-sm text-gray-300'>
                      {person.profession} {person.companysSite && 'at '}
                      {person.companysSite ? (
                        <a
                          className=' text-sky-400 underline'
                          href={'https://' + person?.companysSite}
                        >
                          {person?.companysSite}
                        </a>
                      ) : null}
                    </h3>
                  </div>
                </div>
                <hr
                  className={`${
                    count === 4 ? 'hidden' : 'block text-gray-600 w-11/12'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* seventh */}

      <div className=' flex flex-col items-center w-full gap-2.5'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          7: Styling based on the descendants of the peer
        </h2>
        <div className=' w-1/2 py-6 px-4 gap-2 rounded-2xl bg-gray-900 flex flex-col items-center'>
          {todos.map((todo) => (
            <label
              key={todo.id}
              className='gap-2 w-11/12 flex flex-row items-center '
            >
              <label className='peer'>
                <input type='checkbox' />
              </label>
              <h2 className=' text-white peer-has-checked:line-through decoration-orange-600 decoration-wavy peer-has-hover:text-green-400 peer-has-active:text-sky-500 '>
                {todo.title}
              </h2>
            </label>
          ))}
        </div>
      </div>
      {/* eigth */}
      <div className=' flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          8 :Styling based on the parent state
        </h2>
        <div className=' group rounded-2xl outline-1 outline-sky-500 py-4 px-2 items-center flex flex-col w-1/2 gap-3 bg-gray-800 '>
          <h2 className=' cursor-pointer group-active:text-blue-500 group-hover:text-gray-100 text-gray-300'>
            New Project
          </h2>
          <h2 className=' cursor-pointer group-hover:text-orange-600 text-sm group-active:text-blue-500 text-gray-400'>
            Create a new project of variety of starting templates
          </h2>
        </div>
      </div>
      {/* Nine*/}
      <div className=' flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          9 :Differentiating nested groups
        </h2>
        <div className=' group/main rounded-2xl outline-1 outline-sky-500 py-4 px-2 items-center flex flex-col w-1/2 gap-3 bg-gray-800 '>
          <div className=' group/childOne cursor-pointer text-gray-300 flex flex-row items-center space-x-2'>
            <img
              src={imageOne}
              className=' group-hover/childOne:outline-2 outline-green-500 w-16 h-16 rounded-full'
              alt=''
            />
            <h2 className='group-hover/childOne:text-green-500 group-hover/childOne:animate-bounce group-active/main:text-orange-600'>
              Jecinta Wilson
            </h2>
          </div>
          <h2 className=' group-hover/main:underline group-hover/main:animate-pulse decoration-sky-400 group-hover/main:text-blue-600 cursor-pointer text-gray-300'>
            Create a new project of variety of starting templates
          </h2>
        </div>
      </div>

      {/* <div className="  flex flex-col w-full items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-gray-300 px-4">
          10 :Styling based on siblings state
        </h2>
        <div className=" w-1/2 rounded-2xl bg-gray-800 items-center flex flex-col gap-2 py-4">
          <label className=" text-gray-300 ">Email *</label>
          <input
            onChange={handleEmailInput}
            type="email"
            placeholder="Enter your email"
            className={`pl-4 bg-gray-700 text-gray-300 rounded-2xl placeholder-gray-500 outline-1 outline-gray-600 py-1 ${
              emailTwoValid
                ? 'outline-1 outline-gray-600 text-gray-300'
                : 'outline-1 outline-red-500 text-red-500'
            }`}
          />
          <h2
            className={`${
              emailTwoValid ? 'invisible' : 'visible'
            } text-red-500 text-sm`}
          >
            Please provide a valid email address
          </h2>
        </div>
      </div> */}
      {/* ten */}
      <div className='  flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          10 :Styling based on siblings state
        </h2>
        <div
          style={{ transitionDuration: '0.5s' }}
          className='w-1/2 group transform duration-200 delay-75 ease-in-out rounded-2xl bg-gray-800 items-center flex flex-col gap-2 py-4'
        >
          <label className=' text-gray-300 '>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            className={`peer not-focus:invalid:text-red-500 invalid:text-yellow-500 not-focus:invalid:outline-red-500 pl-4 bg-gray-700 text-gray-300 rounded-2xl placeholder-gray-500 outline-1 outline-gray-600 py-1`}
          />
          <h2 className='text-red-500 peer-invalid:opacity-100 transform duration-200 ease-out peer-focus:opacity-0 '>
            Please provide a valid email address.
          </h2>
        </div>
      </div>

      {/* eleven */}
      <div className='  flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          11 :Differentiating between peers
        </h2>
        <div
          style={{ transitionDuration: '0.5s' }}
          className='w-1/2 group rounded-2xl bg-gray-800 items-center flex flex-col gap-2 py-4'
        >
          <h2 className='text-gray-300'>Published Status</h2>
          <hr className=' text-gray-500 w-11/12' />

          <div className=' peer/draft rounded-[0.3em] has-checked:bg-gray-700 has-checked:outline-1 outline-green-400 cursor-pointer flex flex-row items-center w-1/4 gap-1 justify-center'>
            <input
              checked={draftChecked}
              onChange={publishDraftChecked}
              type='radio'
              id='draft'
              className='cursor-pointer'
              name='draftChecked'
            />
            <label className='text-gray-300' htmlFor='draft'>
              Draft
            </label>
          </div>
          <div className='rounded-[0.3em] peer/published has-checked:bg-gray-700 has-checked:outline-1 outline-sky-400 cursor-pointer flex flex-row items-center justify-center w-1/4 gap-1'>
            <input
              checked={publishedChecked}
              onChange={publishDraftChecked}
              type='radio'
              className='cursor-pointer'
              id='published'
              name='publishedChecked'
            />
            <label className='text-gray-300' htmlFor='published'>
              Published
            </label>
          </div>
          <h2 className='peer-has-checked/draft:block hidden text-gray-300 '>
            This is your drafts
          </h2>
          <FolderDown className=' peer-has-checked/draft:block hidden stroke-white font-bold w-10 h-10' />
          <h2 className='peer-has-checked/published:block hidden text-gray-300'>
            This is your published items
          </h2>
          <CloudUpload className=' peer-has-checked/published:block hidden stroke-white font-bold w-10 h-10' />
        </div>
      </div>
      {/* twelve */}
      <div className='  flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] text-sky-500 underline font-bold rounded-full bg-gray-800 px-4'>
          Pseudo Classes
        </h2>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          12 ::before and ::after
        </h2>
        <div className='w-1/2 group rounded-2xl bg-gray-800 items-center flex flex-col gap-2 py-4'>
          <label className=" text-gray-300 after:text-red-500 after:ml-2 after:content-['*'] ">
            Email
          </label>
          <input
            type='email'
            placeholder='Enter your email'
            className={` not-focus:invalid:text-red-500 invalid:text-yellow-500 not-focus:invalid:outline-red-500 pl-4 bg-gray-700 text-gray-300 rounded-2xl placeholder-gray-500 outline-1 outline-gray-600 py-1`}
          />
        </div>
        <div className=' flex py-3 w-1/2 rounded-2xl bg-gray-900 flex-col items-center gap-0.5'>
          <h2 className="text-gray-300 before:px-2 before:rounded-full before::mr-2 before:font-bold before:bg-pink-500 before:text-gray-800 before:content-['Increase']">
            the sacrifice or reduce the desire
          </h2>
        </div>
      </div>
      {/* Thirteen */}
      <div className='  flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          13 ::Placeholder
        </h2>
        <div className=' py-1 rounded-[0.5em] px-3 flex flex-row items-center gap-2 bg-gray-800'>
          <input
            type='text'
            className=' bg-white placeholder:italic text-gray-700 py-1 px-4 text-sm pl-3 outline-0 rounded-[0.4em] '
            placeholder='search for anything'
          />
          <Search className=' w-5 h-5 font-bold text-white' />
        </div>
      </div>
      {/* Fourteen */}
      <div className='  flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          14 ::File
        </h2>
        <input
          onChange={handleFileChange}
          name='file'
          type='file'
          className=' file:bg-indigo-500 file:text-white file:rounded-2xl file:px-2 file:py-1 bg-white text-green-500 py-1  text-sm pl-3 outline-0 rounded-[0.4em] '
          placeholder='search for anything'
        />
      </div>
      {/* Fifteen */}
      <div className='  flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          15 ::Marker
        </h2>
        <ul
          role='list'
          className='list-disc flex flex-col items-center w-1/4 gap-1 rounded-2xl bg-gray-900 text-gray-200 marker:text-sky-400'
        >
          <li>Kevin</li>
          <li>Kipkirui</li>
          <li>Langat</li>
        </ul>
      </div>
      {/* Sixteen */}
      <div className='  flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          16 ::Selection
        </h2>
        <h2 className=' select-text selection:text-fuchsia-600 selection:bg-teal-500 py-4 px-4 text-[medium] w-1/2 font-light rounded-2xl bg-gray-800 text-gray-400 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi,
          sunt nobis dolorem repudiandae soluta, beatae numquam vel incidunt
          odio, totam veritatis inventore nesciunt quisquam perferendis culpa
          cupiditate modi quis!
        </h2>
      </div>
      {/* Seventeen */}
      <div className='  flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          17 ::firstline, ::firstletter
        </h2>
        <h2 className=' selection:text-fuchsia-600 first-letter:float-left first-letter:text-6xl first-letter:text-white first-line:underline first-line:italic selection:bg-teal-500 py-4 px-4 text-[medium] w-1/2 font-light rounded-2xl bg-gray-800 text-gray-400 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi,
          sunt nobis dolorem repudiandae soluta, beatae numquam vel incidunt
          odio, totam veritatis inventore nesciunt quisquam perferendis culpa
          cupiditate modi quis!
        </h2>
      </div>
      {/* Eigthteen */}
      <div className='  flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          18 :Responsive Design
        </h2>
        <div className='w-11/12 py-3 px-2 bg-gray-900 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2'>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            01
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            02
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            03
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            04
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            05
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            06
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            07
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            08
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            09
          </span>

          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            10
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            11
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            12
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            13
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            14
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            15
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            16
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            17
          </span>
          <span className='text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
            18
          </span>
        </div>
      </div>
      {/* nineteen */}
      <div className='  flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          19 :prefers-reduced-motion
        </h2>

        <div className=' flex flex-row items-center justify-center gap-3 w-40 px-2 rounded-[0.3em] py-1 bg-sky-500 h-full'>
          <span className='w-6 h-6 motion-reduce:hidden  bg-transparent border-b-gray-400 border-r-white rounded-full border-l-gray-400 border-t-gray-400 border-4 animate-spin '></span>{' '}
          <button className=' text-gray-100'> Proccessing...</button>
        </div>
      </div>

      {/* Twenty */}
      <div className='flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          20 :prefers-contrast
        </h2>
        <div className='contrast-less:bg-gray-900 contrast-more:bg-gray-950 flex flex-col py-3 gap-1 items-center w-1/2 bg-gray-800 rounded-2xl'>
          <h2 className=' contrast-less:text-gray-500 contrast-more:text-gray-100 text-gray-300'>
            Social Security Number
          </h2>
          <input
            type='text'
            placeholder='ssn'
            className='pl-4 bg-gray-700 contrast-more:bg-gray-800  contrast-more:text-gray-50 contrast-more:placeholder:text-gray-100 contrast-more:outline-gray-300 outline-1 contrast-less:outline-gray-700  text-gray-300 rounded-full outline-gray-300'
          />
          <h2 className='contrast-more:text-gray-100 contrast-less:text-gray-400 text-gray-300'>
            we need this number to steal your money
          </h2>
        </div>
      </div>
      {/* Twenty One */}
      <div className='flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          21 :Pointer and any-pointer
        </h2>
        <div className='flex w-1/2 flex-col items-center py-2 rounded-2xl bg-gray-800 '>
          <h2 className='text-gray-300'>Random Access Memory (RAM)</h2>
          <div className='flex flex-row items-center gap-3 '>
            <button className='cursor-pointer font-bold focus:bg-orange-500  text-gray-200 py-0.5 px-4 outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
              4GB
            </button>
            <button className='cursor-pointer font-bold focus:bg-orange-500  text-gray-200 py-0.5 px-4 outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
              16GB
            </button>
            <button className='cursor-pointer font-bold focus:bg-orange-500  text-gray-200 py-0.5 px-4 outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
              32GB
            </button>
            <button className='cursor-pointer font-bold focus:bg-orange-500  text-gray-200 py-0.5 px-4 outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
              64GB
            </button>
            <button className='cursor-pointer pointer-fine:bg-sky-400 font-bold focus:bg-orange-500  text-gray-200 py-0.5 px-4 outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center'>
              128GB
            </button>
          </div>
        </div>
      </div>
      {/* Twenty Two */}
      <div className='flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          22 :Orientation
        </h2>
        <div className='portrait:hidden landscape:flex flex-row items-center justify-center gap-4 py-2 px-6 bg-gray-800 w-1/2 rounded-[0.3em] '>
          <h2 className=' text-gray-300'>This is only for landscape view</h2>
          <CircleCheck className='w-6 h-6 text-green-500 font-bold' />
        </div>
      </div>

      {/* Twenty three */}

      <div className='flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          23 :Print
        </h2>
        <div className='portrait:outline-1 portrait:outline-red-600 landscape:flex flex-row items-center justify-center gap-4 py-2 px-6 bg-gray-800 w-1/2 rounded-[0.3em] '>
          <article className='print:hidden text-gray-200'>
            <h1>My Secret Ugali Recipe</h1>
            <p>This recipe is a secret, and must not be shared with anyone</p>
          </article>
          <div className='text-gray-200 hidden print:block'>
            Are you seriously trying to print this? It's secret!
          </div>
        </div>
      </div>

      {/* Twenty four */}
      <div className='flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          24 :@starting-style
        </h2>
        <div className='flex flex-col items-center justify-center gap-4 py-4 px-8 bg-gray-800 w-1/2 rounded-[0.3em] '>
          <button
            popoverTarget='updatePop'
            className='bg-orange-500 px-3 text-gray-300 rounded-[0.4em] py-0.5'
          >
            Check Updates
          </button>
          <div
            id='updatePop'
            className='flex opacity-70 starting:opacity:1  flex-col items-center justify-center bg-gray-700 outline-1 outline-gray-400 rounded-[0.3em] py-2 px-3'
          >
            <MessageCircleWarning className='text-indigo-400' />

            <h2 className='text-gray-300 flex'>
              v24.19.00 is now available{' '}
              <Stars className='text-indigo-400 w-4 h-4' />{' '}
            </h2>
            <h2 className='text-gray-300'>Click to update</h2>
            <button className='bg-indigo-500 px-3 text-gray-300 rounded-[0.4em] py-0.5'>
              Update Now
            </button>
          </div>
        </div>
      </div>

      {/* Twenty five */}
      <div className='flex flex-col w-full items-center gap-2'>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          25 :Open/closed state
        </h2>
        <details
          className=' border border-gray-900 open:border-indigo-500/50 rounded-[0.4em] px-3 p-1 open:bg-gray-100'
          open
        >
          <summary className='text-sm leading-6 font-semibold text-gray-900 select-none'>
            Why do they call it Ovaltine?
          </summary>
          <div className='mt-1 text-sm leading-6 text-gray-600'>
            <p>
              The mug is round. The jar is round. They should call it Roundtine.
            </p>
          </div>
        </details>
      </div>

      {/* Twenty six */}
      <div className='flex flex-col w-full items-center gap-2 '>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          26 :Styling Direct Children with *:
        </h2>
        <div className=' py-4 w-1/2 bg-gray-800 rounded-[0.4em] items-center flex flex-col '>
          <ul className='  *:text-sky-300 *:outline-1 *:outline-gray-500 *:bg-sky-800/40 *:rounded-full *:px-3 *:w-11/12  w-11/12 items-center place-items-center justify-center h-full  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 '>
            <li>Python</li>
            <li>Php</li>
            <li>Ruby</li>
            <li>Perl</li>
            <li>Java</li>
            <li>Ada</li>
            <li>Go</li>
            <li>FortRan</li>
            <li>Kotlin</li>
          </ul>
        </div>
      </div>

      {/* Twenty seven */}
      <div className='flex flex-col w-full items-center gap-2 '>
        <h2 className=' text-[medium] font-bold rounded-full bg-gray-300 px-4'>
          27 :Styling all Children with **:
        </h2>
        <div className='flex **:data-origin:text-sky-400 **:data-avatar:w-16 **:data-avatar:h-16 **:data-avatar:rounded-full **:data-avatar:outline-1 **:data-avatar:outline-gray-100 items-center py-3  justify-center flex-row gap-2 bg-gray-800 w-1/2 rounded-[0.4em] outline-1 outline-gray-300'>
          <img src={imageTwo} data-avatar alt='' />
          <ul className=' flex flex-col items-center '>
            <li className='text-gray-200'>Iryana Zarutska</li>
            <li data-origin>from Ukraine</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HoverState;
