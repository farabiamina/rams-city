const FormArrowSvg = (props) => (
    <svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M3 9L15 9M15 9L10.5 13.5M15 9L10.5 4.5" stroke={props.color} />
    </svg>
);
export default FormArrowSvg;