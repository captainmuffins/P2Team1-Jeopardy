package com.revature.jeopardy.dtos;

public class SessionDTO {
    private int sessionWinnings;
    private boolean sessionWinner;
    private int sessionPlayerfk;
    private int sessionGamefk;
    
    public SessionDTO() {
    }

    public SessionDTO(int sessionWinnings, boolean sessionWinner, int sessionPlayerfk, int sessionGamefk) {
        this.sessionWinnings = sessionWinnings;
        this.sessionWinner = sessionWinner;
        this.sessionPlayerfk = sessionPlayerfk;
        this.sessionGamefk = sessionGamefk;
    }

    public int getSessionWinnings() {
        return sessionWinnings;
    }

    public void setSessionWinnings(int sessionWinnings) {
        this.sessionWinnings = sessionWinnings;
    }

    public boolean isSessionWinner() {
        return sessionWinner;
    }

    public void setSessionWinner(boolean sessionWinner) {
        this.sessionWinner = sessionWinner;
    }

    public int getSessionPlayerfk() {
        return sessionPlayerfk;
    }

    public void setSessionPlayerfk(int sessionPlayerfk) {
        this.sessionPlayerfk = sessionPlayerfk;
    }

    public int getSessionGamefk() {
        return sessionGamefk;
    }

    public void setSessionGamefk(int sessionGamefk) {
        this.sessionGamefk = sessionGamefk;
    }

    @Override
    public String toString() {
        return "SessionDTO [sessionGamefk=" + sessionGamefk + ", sessionPlayerfk=" + sessionPlayerfk
                + ", sessionWinner=" + sessionWinner + ", sessionWinnings=" + sessionWinnings + "]";
    }

    

}
