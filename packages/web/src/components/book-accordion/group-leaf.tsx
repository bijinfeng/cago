import { Link } from 'react-router-dom';
import { buttonVariants, cn } from '@pingtou/ui';
import { IconButton } from '@/components/icon-button';
import { Ellipsis, GripVertical } from 'lucide-react';
import { BookIcon } from '@/components/book-icon';

interface GroupLeafProps {
  name: string;
  link: string;
  dragHandleRef?: React.LegacyRef<HTMLDivElement>;
}

export const GroupLeaf: React.FC<GroupLeafProps> = (props) => {
  const { link, name, dragHandleRef } = props;

  return (
    <Link
      to={link}
      className={cn(buttonVariants({ variant: 'ghost' }), 'flex px-1 py-0 h-8 group')}
    >
      <div
        ref={dragHandleRef}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'w-5 h-6 p-0 cursor-pointer hover:bg-gray-200 transition-all mx-0.5 invisible group-hover:visible',
        )}
      >
        <GripVertical size={16} />
      </div>
      <div className="flex-1 flex items-center">
        <BookIcon size={18} />
        <span className="ml-1.5">{name}</span>
      </div>
      <IconButton
        className={cn(
          'w-5 h-6 hover:bg-gray-200 transition-all mx-0.5 invisible group-hover:visible',
        )}
      >
        <Ellipsis size={16} />
      </IconButton>
    </Link>
  )
}