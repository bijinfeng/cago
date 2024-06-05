import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuGroup,
  cn,
} from '@pingtou/ui';
import React from 'react';

type ItemType = MenuItemType | SubMenuType | MenuItemGroupType | MenuDividerType;

interface MenuDividerType {
  type: 'divider';
}

interface MenuItemGroupType {
  type: 'group';
  label: React.ReactNode;
  children: MenuItemType[];
}

interface MenuItemType {
  key: string;
  label: React.ReactNode;
  danger?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface SubMenuType {
  key: string;
  label: React.ReactNode;
  children: ItemType[];
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface MenuProps {
  items: ItemType[];
  onClick?: (params: { item: MenuItemType | SubMenuType; key: string }) => void;
}

interface DropdownProps {
  children: React.ReactNode;
  menu: MenuProps;
  align?: 'center' | 'end' | 'start';
  side?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const isDivider = (item: ItemType): item is MenuDividerType => {
  return 'type' in item && item.type === 'divider';
};

const isGroup = (item: ItemType): item is MenuItemGroupType => {
  return 'type' in item && item.type === 'group';
};

const isSubMenu = (item: ItemType): item is SubMenuType => {
  return 'children' in item && item.children.length > 0;
};

export const Dropdown = (props: DropdownProps) => {
  const { open, children, align, side, className, menu, onOpenChange } = props;
  const { items, onClick } = menu;

  const renderText = (item: SubMenuType | MenuItemType) => {
    if (!item.icon) return item.label;

    return (
      <div className="flex items-center gap-2">
        {item.icon}
        {item.label}
      </div>
    );
  };

  const renderMenuItem = (item: ItemType) => {
    if (isDivider(item)) {
      return <DropdownMenuSeparator />;
    }

    if (isGroup(item)) {
      return (
        <DropdownMenuGroup>
          {item.children.map((child) => (
            <React.Fragment key={child.key}>{renderMenuItem(child)}</React.Fragment>
          ))}
        </DropdownMenuGroup>
      );
    }

    if (isSubMenu(item)) {
      return (
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>{renderText(item)}</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {item.children.map((child, idx) => (
                <React.Fragment key={idx}>{renderMenuItem(child)}</React.Fragment>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      );
    }

    return (
      <DropdownMenuItem
        disabled={item.disabled}
        onClick={() => onClick?.({ item, key: item.key })}
        className={cn({ '!text-red-600': item.danger })}
      >
        {renderText(item)}
      </DropdownMenuItem>
    );
  };

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align={align} className={className} side={side}>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>{renderMenuItem(item)}</React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
