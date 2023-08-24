import { AnimationOnScroll } from "react-animation-on-scroll";

const Animation = ({ children, ...props  }) => {
    return (
        <AnimationOnScroll animateOnce={true} animateIn='animate' {...props}>
            {children}
        </AnimationOnScroll>
    )
}

export default Animation;