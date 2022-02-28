import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
	name: string;
	label?: string; 
}

export function Input({name, label, ...rest}: InputProps ){
	return(
		<FormControl>
			{ !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
			<ChakraInput 
			name={name}
			id={name}
			type="password"
			size="lg"
			bgColor="gray.900"
			variant="filled"
			focusBorderColor="pink.500"
			_hover={{
				bgColor: 'gray.900'
			}}
			{...rest}
			/>
		</FormControl>
	)
}