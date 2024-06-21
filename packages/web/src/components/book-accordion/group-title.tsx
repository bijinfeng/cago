import { Link } from 'react-router-dom';
import { buttonVariants, cn } from '@pingtou/ui';
import { IconButton } from '@/components/icon-button';
import ArrowDownIcon from '@/assets/review-arrow-down.svg?react';
import { ChevronRight } from 'lucide-react';

interface GroupTitleProps {
  link: string;
  name: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const GroupTitle: React.FC<GroupTitleProps> = (props) => {
  const { link, name, isOpen, onToggle } = props;

  return (
    <Link
      to={link}
      className={cn(buttonVariants({ variant: 'secondary' }), 'flex px-1 py-0 h-8')}
    >
      <IconButton
        className={cn('w-6 h-6 hover:bg-gray-200')}
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
      >
        <ArrowDownIcon
          width={20}
          height={20}
          className={cn('transition-all', { '-rotate-90': !isOpen })}
        />
      </IconButton>
      <span className="flex-1 ml-1.5">{name}</span>
      <ChevronRight size={16} className="mr-1.5" />
    </Link>
  )
}
