import {
  Select as SelectComponent,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@pingtou/ui';
import React from 'react';

type OriginSelectProps = React.ComponentPropsWithoutRef<typeof SelectComponent>;

interface SelectProps extends Omit<OriginSelectProps, 'onValueChange'> {
  placeholder?: React.ReactNode;
  onChange?: OriginSelectProps['onValueChange'];
  options?: {
    label: React.ReactNode;
    value: string;
  }[];
}

export const Select = React.forwardRef<React.ElementRef<typeof SelectValue>, SelectProps>(
  (props, ref) => {
    const { onChange, placeholder, options, ...rest } = props;

    return (
      <SelectComponent onValueChange={onChange} {...rest}>
        <SelectTrigger>
          <SelectValue ref={ref} placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectComponent>
    );
  },
);
