import { Controller, useFormContext } from 'react-hook-form'
import { Switch, SwitchProps } from '../components/switch'

type Props = Omit<SwitchProps, 'onChange' | 'onBlur' | 'name' | 'value' | 'type'> & {
    name: string
}

export const ControlledSwitch = ({ name, ...others }: Props) => {
    const { control } = useFormContext()

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => {
                return <Switch {...others} {...field} checked={field.value} name={name} />
            }}
        />
    )
}
