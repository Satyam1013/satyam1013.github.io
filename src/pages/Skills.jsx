import { Button, VStack } from '@chakra-ui/react'
import React from 'react'

const Skill = ['HTML5','CSS','JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Next.js', 'Redux.js', 'TypeScript', 'Data Structures & Algorithms']

const Skills = () => {
  return (
  <VStack>
{Skill.map((el) => (
  <Button
        /* flex={1} */
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'blue.400'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}>
        {el}
      </Button>
))}
  </VStack>
  )
}

export default Skills

