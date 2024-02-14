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

export const Event_Data = '?';
export const Event_Text = 'Event';
export const Enemy_Data = 'M';
export const Enemy_Text = 'Monster';
export const Elite_Data = 'E';
export const Elite_Text = 'Elite';
export const Merchant_Data = '$';
export const Merchant_Text = 'Merchant';
export const Boss_Data = 'B';
export const Boss_Text = 'Boss';
export const Treasure_Data = 'T';
export const Treasure_Text = 'Treasure';
export const Rest_Data = 'R';
export const Rest_Text = 'Rest';
export const Boss_Treasure_Text = 'Boss Treasure';

export const Renamed_Floors: {[key: string]: string} = {
    [Event_Data]: Event_Text,
    [Enemy_Data]: Enemy_Text,
    [Elite_Data]: Elite_Text,
    [Merchant_Data]: Merchant_Text,
    [Boss_Data]: Boss_Text,
    [Treasure_Data]: Treasure_Text,
    [Rest_Data]: Rest_Text,
    null: Boss_Treasure_Text,
}

// Chartjs constants
export const BarChartColors = [
    "red",
    "green",
    "blue",
    "purple"
]

export const FloorChartColors = [
    "#fff153",
    "#dfdfdf",
    "#66ecff",
    "#ba8c3d",
    "#e681ff",
    "#97664a",
    "#ff9035",
    "#886495",
]

export const links = [
    { name: 'Dashboard', href: '/', },
    { name: 'Card Library', href: '/library', },
    { name: 'Runs', href: '/run', },
]