import Image from "next/image";

export const runtime = "edge";

export default function Home() {
  return (
    <main className='h-screen w-screen flex flex-col items-center justify-center'>
      <div id='content'>
        <p className='info text-center'>
          <Image
            src='/logo-jsalsa.png'
            alt='jsalsa.com'
            width={300}
            height={200}
          />
          <br />
          HANG TIGHT WITH THAT CHIP...
          <br />
          jSALSA IS COMING SOON....
          <br />
          <br />
          {/* <a href='https://jasonleewilson.com' target='_blank'>
            <svg
              version='1.1'
              id='logo-container'
              xmlns='http://www.w3.org/2000/svg'
              xmlns:xlink='http://www.w3.org/1999/xlink'
              x='0px'
              y='0px'
              viewBox='0 0 256 256'
              style='enable-background: new 0 0 256 256'
              xml:space='preserve'
            >
              <path
                className='logo'
                d='M181,101.2c0-18.5,0.1-37-0.1-55.5c0-3.1,0.6-4.3,4.1-4.2c14.3,0.2,28.6,0.2,43,0c3.4,0,4.1,1,4.1,4.2
	c-0.1,31,0.1,62-0.1,92.9c-0.1,12.1-0.4,24.4-3.7,36.1c-5.9,21.3-20.9,33.4-41.8,37.4c-20.5,3.9-41.1,3.4-60.2-6.9
	c-1.7-0.9-2.7-0.5-4.1,0.2C98.9,217.6,75,216.1,51,208.8c-7.4-2.3-13.4-7.2-18.7-13c-4.7-5.1-7.1-11-7.6-17.9
	c-1.8-29.6,0-59.2-0.3-88.8c0-3.1,1.7-3,3.8-3c11.3,0,22.6,0.1,34-0.1c3.5-0.1,4.4,1.1,4.5,4.6c0.2,22.6,0.7,45.3,1.1,67.9
	c0,1.7,0.1,3.3,0.4,5c1,6.8,5.9,11.8,11.8,12.3c8.7,0.7,13.9-2.3,16.5-9.7c2.2-6.2,2.3-12.7,2.3-19.2c0-28.1,0.1-56.3-0.1-84.4
	c0-3.9,1-5,5-5c13.8,0.2,27.6,0.2,41.5,0c3.9-0.1,4.6,1.1,4.6,4.7c-0.1,28.3,0,56.6,0.1,84.9c0,5.3,0.4,10.6,0.8,15.9
	c0.4,6,5.1,11.6,10.4,12.6c7.9,1.5,14.3-1.3,17.2-7.7c2.5-5.4,2.8-11.3,2.9-17.1C181,134.2,181,117.7,181,101.2L181,101.2z'
              />
            </svg>
          </a> */}
        </p>
      </div>
    </main>
  );
}
