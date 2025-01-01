// components/button/button.tsx
import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

export type ButtonProps = {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
    border: 0;
    line-height: 1;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    font-weight: bold;
    border-radius: 10px;
    display: inline-block;
    color: ${(props) => (props.primary ? '#fff' : '#000')};
    background-color: ${(props) => (props.primary ? '#FF5655' : '#f4c4c4')};
    padding: ${(props) =>
        props.size === 'xsmall'
            ? '5px 20px 6px'
            : props.size === 'small'
              ? '7px 25px 8px'
              : props.size === 'medium'
                ? '9px 30px 11px'
                : props.size === 'large'
                  ? '14px 30px 16px'
                  : '18px 30px 20px'};
`;

const Button: React.FC<ButtonProps> = ({
    size,
    primary,
    disabled,
    text,
    onClick,
    ...props
}) => {
    return (
        <StyledButton
            style={{ opacity : disabled ? '0.5' : '1' }}
            type="button"
            onClick={onClick}
            primary={primary}
            disabled={disabled}
            size={size}
            {...props}
        >
            {text}
        </StyledButton>
    );
};

export default Button;
