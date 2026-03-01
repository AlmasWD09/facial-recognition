interface DateFormatterProps {
    date?: string | Date; 
    className?: string;
}

export const DateFormatter: React.FC<DateFormatterProps> = ({ date, className = '' }) => {
    const formatDate = (isoString: string | Date): string => {
        const d = new Date(isoString);
        
        // Check for invalid date
        if (isNaN(d.getTime())) {
            return 'Invalid Date';
        }
        
        const day = d.getDate();
        const dayMod100 = day % 100;
        const dayMod10 = day % 10;
        
        // Get the suffix for the day (st, nd, rd, th)
        let suffix: string;
        if (dayMod100 >= 11 && dayMod100 <= 13) {
            suffix = 'th';
        } else {
            switch (dayMod10) {
                case 1: suffix = 'st'; break;
                case 2: suffix = 'nd'; break;
                case 3: suffix = 'rd'; break;
                default: suffix = 'th';
            }
        }
        
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${day}${suffix} ${months[d.getMonth()]}, ${d.getFullYear()}`;
    };
    
    if (!date) {
        return <span className={className}>-</span>;
    }
    
    return <span className={className}>{formatDate(date)}</span>;
};



// Format date from timestamp
export const DateFormatter2 = (timestamp: string | null | undefined): string => {
    if (!timestamp) return "N/A";

    const date = new Date(timestamp);

    // Check if date is valid
    if (isNaN(date.getTime())) return "Invalid Date";

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
};




interface FormattedTimeProps {
    timestamp?: string | Date | null;
}

export const FormattedTime: React.FC<FormattedTimeProps> = ({ timestamp }) => {
    if (!timestamp) return null;
    
    const date = new Date(timestamp);
    
    // Check for invalid date
    if (isNaN(date.getTime())) {
        return <span>Invalid Time</span>;
    }
    
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'pm' : 'am';
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0'); // Fixed: 12-hour format
    
    return <span>{`${formattedHours}:${minutes} ${period}`}</span>;
};

