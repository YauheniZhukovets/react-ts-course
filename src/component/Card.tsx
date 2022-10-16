import React, {FC, PropsWithChildren} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string
    height?: string
    variant?: CardVariant
}

export const Card: FC<CardProps & PropsWithChildren> = ({
                                                            width,
                                                            height,
                                                            variant,
                                                            children,

                                                        }) => {

    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.outlined ? '1px solid red' : 'none',
            background: variant === CardVariant.primary ? 'gray' : ''
        }}
        >
            {children}
        </div>
    );
};

