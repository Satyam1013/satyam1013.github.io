import { Box,  Image, Text } from '@chakra-ui/react'
import React from 'react'
import './about.css'

const About = () => {
  return (
    <div>
    <div class="Iam">

<p>This is</p>
<b>
  <div class="innerIam">
    Satyam<br /> 
    A Full Stack Web Developer<br />
    From Balaghat<br />
   
    </div>
</b>

</div>
    <Box display='flex' justifyContent={'end'} mr='2rem' top='20px'>
    <Image src='https://avatars.githubusercontent.com/u/101392309?v=4' alt='pro-pic' width={'200px'} height={'200px'} borderRadius='50%' />

    </Box>
        <Text width={'60%'} m='auto' mt='5rem' letterSpacing={'2px'}>A self-motivating, hard-working and ambitious Web Developer with Proficiency in React JS, Node JS. Problem solving mindset with the ability to perform well in collaboration. 1000+ hour of coding & hands on experience on making 3 fully functional websites. Looking forward to work as a full stack web developer or software engineer in any exciting tech company.</Text>
    </div>
  )
}

export default About