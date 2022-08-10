package com.revature.jeopardy.dtos;

public class Response {
	private int statusCode;
	private String statusMessage;
	private boolean statusSuccess;
	private Object statusObject;

	public Response(int statusCode, String statusMessage, boolean statusSuccess, Object statusObject) {
		super();
		this.statusCode = statusCode;
		this.statusMessage = statusMessage;
		this.statusSuccess = statusSuccess;
		this.statusObject = statusObject;
	}

	public int getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	public String getStatusMessage() {
		return statusMessage;
	}

	public void setStatusMessage(String statusMessage) {
		this.statusMessage = statusMessage;
	}

	public boolean isStatusSuccess() {
		return statusSuccess;
	}

	public void setStatusSuccess(boolean statusSuccess) {
		this.statusSuccess = statusSuccess;
	}

	public Object getStatusObject() {
		return statusObject;
	}

	public void setStatusObject(Object statusObject) {
		this.statusObject = statusObject;
	}

	@Override
	public String toString() {
		return "Response [statusCode=" + statusCode + ", statusMessage=" + statusMessage + ", statusSuccess="
				+ statusSuccess + ", statusObject=" + statusObject + "]";
	}

}
