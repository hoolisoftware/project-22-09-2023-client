export interface APIModel
{
    id: number
    [key: string]: unknown
}

export interface APIOrganization extends APIModel
{
    name: string
    created: string
    branches_count: number 
}

export interface APIBranch extends APIModel
{
    organization: APIOrganization
    address: string
}

export interface APIOffer extends APIModel
{
    action_id: number
    team_a: string
    team_b: string
    created: string
    organization: APIOrganization
}

export interface APIBet extends APIModel
{
    branch: APIBranch
    offer: APIOffer
    table_number: number
    bet: string
    created: string
    paid: boolean
}

export interface APIUserMe extends APIModel
{
    is_superuser: true
    username: "admin"
    first_name: string
    last_name: string
    email: string
    role: "superadmin"
}


export interface APIUser extends APIModel
{
    username: string
    role: string
}

// ---

export interface Event
{
    id: number
    sport: string,
    league: string,
    timeStart: string,
    teamHome: string,
    teamAway: string,
    riskRate: 'low' | 'medium' | 'high'
    status: 'waiting' | 'live' | 'ended'
}

export interface Offer extends Event
{}

export interface User
{
    id: number
    username: string
    barname?: string
    role: 'superadmin' | 'admin' | 'staff'
}

export interface Bar
{
    id: number
    name: string
    branches: number
}

export interface Branch
{
    id: number
    address: string
    tables: number
}

export interface HistoryRecord
{
    date: string
    sport: string
    league: string
    teamHome: string
    teamAway: string
    tableNumber: number
    riskRate: 'low' | 'medium' | 'high'
    result: 'won' | 'loose' | 'pending'
}