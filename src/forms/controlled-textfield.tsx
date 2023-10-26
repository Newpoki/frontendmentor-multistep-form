import { Controller, useFormContext } from 'react-hook-form'
import { Textfield, TextfieldProps } from '../components/textfield'

type Props = Omit<
    TextfieldProps,
    | 'name'
    | 'onChange'
    | 'onBlur'
    | 'ref'
    | 'name'
    | 'min'
    | 'max'
    | 'maxLength'
    | 'minLength'
    | 'pattern'
    | 'required'
    | 'disabled'
    | 'error'
> & {
    name: string
}

export const ControlledTextfield = ({ name, ...others }: Props) => {
    const { control } = useFormContext()

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <Textfield {...others} {...field} error={error?.message} name={name} />
            )}
        />
    )
}
