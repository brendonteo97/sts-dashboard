export const Bash = 'Ironclad_Bash';
export const I_Strike = 'Ironclad_Strike';
export const Armaments = 'Ironclad_Armaments';
export const Anger = 'Ironclad_Anger';
export const BodySlam = 'Ironclad_BodySlam';
export const I_Defend = 'Ironclad_Defend';

export const Ironclad_Data = 'IRONCLAD';
export const Ironclad_Text = 'Ironclad';
export const Silent_Data = 'THE_SILENT';
export const Silent_Text = 'Silent';
export const Defect_Data = 'DEFECT';
export const Defect_Text = 'Defect';
export const Watcher_Data = 'WATCHER';
export const Watcher_Text = 'Watcher';

export const Ironclad_Cards = [Bash, I_Strike, Armaments, Anger, BodySlam, I_Defend];

export const Renamed_Chars: {[key: string]: string} = {
    [Ironclad_Data]: Ironclad_Text, 
    [Silent_Data]: Silent_Text,
    [Defect_Data]: Defect_Text,
    [Watcher_Data]: Watcher_Text,
};

// Chartjs constants
export const BarChartColors = [
    "red",
    "green",
    "blue",
    "purple"
]

export const links = [
    { name: 'Dashboard', href: '/', },
    { name: 'Card Library', href: '/library', },
    { name: 'Runs', href: '/run', },
]