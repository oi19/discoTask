import { useMutation } from 'react-query';
import { postPromise } from '../../infrastructure/api/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { formSchema, formSchemaType } from '../../shared/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ScreenNames } from '../../shared/constants';

const useLoginHook = (query = '', navigation) => {

    const { control, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<formSchemaType>({
        resolver: zodResolver(formSchema)
    })

    const onSuccess = () => {
        navigation.navigate(ScreenNames.BUDGET)
    }

    const onSubmit: SubmitHandler<formSchemaType> = async () => {
        try {
            await postLoginData()
        } catch {
            setError(('loginName'), { message: 'root error ' })
        }
    }

    const { mutateAsync: postLoginData } = useMutation(
        {
            mutationFn: () => postPromise,
            onSuccess: () => onSuccess(),
            onSettled: () => { }
        }
    )

    return {
        onSuccess: handleSubmit(onSubmit),
        errors,
        isSubmitting,
        control
    }
}

export default useLoginHook