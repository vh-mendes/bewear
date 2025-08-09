import z, { email } from "zod";

const formSchema = z.object({
    email: z.email(),
    password: z.string().min(6)
});

type FormValues = z.infer<typeof formSchema>;

const SignInForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
    },
  });
 
function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("FORM VALIDADO E ENVIADO");
    console.log(values);
}

return <div>SignInForm</div>
};

export default SignInForm;